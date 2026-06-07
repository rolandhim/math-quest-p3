/**
 * TriangleDiagram — SVG triangle renderer
 *
 * Props:
 *   pts:    [[x1,y1],[x2,y2],[x3,y3]] — triangle vertices
 *   equal:  array of side indices that are equal (0,1,2) for tick marks
 *   right:  vertex index with right angle (-1 = none)
 *   sideLabels: [str, str, str] — labels for each side
 *   vertexLabels: [str, str, str] — labels for each vertex (e.g. ['A','B','C'])
 *   highlight: 'hypotenuse' to highlight the longest side
 *   width: SVG viewBox width (default 220)
 *   height: SVG viewBox height (default 170)
 */

const TICK_LEN = 8
const TICK_GAP = 4

function computeMid(pts, i, j) {
  return [(pts[i][0] + pts[j][0]) / 2, (pts[i][1] + pts[j][1]) / 2]
}

function computePerp(pts, i, j) {
  const dx = pts[j][0] - pts[i][0]
  const dy = pts[j][1] - pts[i][1]
  const len = Math.sqrt(dx * dx + dy * dy)
  return [-dy / len, dx / len] // perpendicular unit vector
}

function tickLines(pts, sideIdx, count) {
  // Which vertices define this side
  const sides = [[0, 1], [1, 2], [2, 0]]
  const [vi, vj] = sides[sideIdx]
  const mx = (pts[vi][0] + pts[vj][0]) / 2
  const my = (pts[vi][1] + pts[vj][1]) / 2
  const [px, py] = computePerp(pts, vi, vj)

  const lines = []
  const totalOffset = ((count - 1) * (TICK_LEN + TICK_GAP)) / 2

  for (let k = 0; k < count; k++) {
    const offset = -totalOffset + k * (TICK_LEN + TICK_GAP)
    const cx = mx + px * 10 // push ticks slightly outward
    const cy = my + py * 10
    const sx = cx + py * offset  // perpendicular to perpendicular = along side
    const sy = cy - px * offset
    const ex = sx + px * TICK_LEN
    const ey = sy + py * TICK_LEN
    lines.push({ x1: sx.toFixed(1), y1: sy.toFixed(1), x2: ex.toFixed(2), y2: ey.toFixed(2) })
  }
  return lines
}

export default function TriangleDiagram({
  pts = [[100, 30], [30, 145], [190, 145]],
  equal = [],
  right = -1,
  sideLabels = [],
  vertexLabels = [],
  highlight = null,
  width = 220,
  height = 170,
}) {
  const pointsStr = pts.map((p) => `${p[0]},${p[1]}`).join(' ')

  // Determine which side is highlighted (hypotenuse)
  let highlightSide = -1
  if (highlight === 'hypotenuse') {
    const sides = [[0, 1], [1, 2], [2, 0]]
    let maxLen = -1
    for (let i = 0; i < 3; i++) {
      const [vi, vj] = sides[i]
      const dx = pts[vj][0] - pts[vi][0]
      const dy = pts[vj][1] - pts[vi][1]
      const len = dx * dx + dy * dy
      if (len > maxLen) {
        maxLen = len
        highlightSide = i
      }
    }
  }

  // Compute side midpoints for side labels
  const sides = [[0, 1], [1, 2], [2, 0]]
  const sideMids = sides.map(([i, j]) => computeMid(pts, i, j))

  // Right angle marker
  let rightMarker = null
  if (right >= 0) {
    const ri = right
    const rj = (right + 1) % 3
    const rk = (right + 2) % 3
    const size = 12
    const dx1 = pts[rj][0] - pts[ri][0]
    const dy1 = pts[rj][1] - pts[ri][1]
    const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1)
    const dx2 = pts[rk][0] - pts[ri][0]
    const dy2 = pts[rk][1] - pts[ri][1]
    const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
    // Angle marker points
    const p1 = [pts[ri][0] + (dx1 / len1) * size, pts[ri][1] + (dy1 / len1) * size]
    const p3 = [pts[ri][0] + (dx2 / len2) * size, pts[ri][1] + (dy2 / len2) * size]
    const p2 = [p1[0] + p3[0] - pts[ri][0], p1[1] + p3[1] - pts[ri][1]]
    rightMarker = `${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)} ${p3[0].toFixed(1)},${p3[1].toFixed(1)}`
  }

  // Group equal sides to determine tick counts per side
  // equal = [0, 1, 2] means sides 0,1,2 are all equal
  // equal = [0, 1] means sides 0 and 1 are equal (isosceles)
  // equal = [] means no sides equal (scalene)
  const tickCounts = [0, 0, 0]
  if (equal.length > 0) {
    // All sides in the 'equal' array get the same tick count
    // If 3 equal sides: each gets 1 tick
    // If 2 equal sides: each gets 1 tick
    const count = equal.length === 3 ? 2 : 1 // double ticks for equilateral, single for isosceles
    for (const sideIdx of equal) {
      tickCounts[sideIdx] = count
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 12,
      padding: 8,
      background: '#f8faff',
      borderRadius: 12,
      border: '1px solid #d0d8f0',
    }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="200" style={{ maxWidth: '100%' }}>
        {/* Triangle outline */}
        <polygon
          points={pointsStr}
          fill="rgba(99, 102, 241, 0.08)"
          stroke="#333"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Highlighted side (e.g. hypotenuse) */}
        {highlightSide >= 0 && (() => {
          const [vi, vj] = sides[highlightSide]
          return (
            <line
              x1={pts[vi][0]} y1={pts[vi][1]}
              x2={pts[vj][0]} y2={pts[vj][1]}
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          )
        })()}

        {/* Re-draw triangle outline over highlight */}
        <polygon
          points={pointsStr}
          fill="none"
          stroke="#333"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Tick marks for equal sides */}
        {tickCounts.map((count, idx) => {
          if (count <= 0) return null
          return tickLines(pts, idx, count).map((t, ti) => (
            <line key={`t${idx}_${ti}`} {...t} stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
          ))
        })}

        {/* Right angle marker */}
        {rightMarker && (
          <polygon points={rightMarker} fill="none" stroke="#333" strokeWidth="1.5" />
        )}

        {/* Side labels */}
        {sideLabels.map((label, idx) => {
          if (!label) return null
          const [vi, vj] = sides[idx]
          const dx = pts[vj][0] - pts[vi][0]
          const dy = pts[vj][1] - pts[vi][1]
          const len = Math.sqrt(dx * dx + dy * dy)
          const [px, py] = computePerp(pts, vi, vj)
          const lx = sideMids[idx][0] + px * 18
          const ly = sideMids[idx][1] + py * 18
          // Calculate angle for text rotation
          let angle = Math.atan2(dy, dx) * (180 / Math.PI)
          if (angle > 90 || angle < -90) angle += 180
          return (
            <text
              key={`sl_${idx}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="12"
              fontWeight="600"
              fill="#4b5563"
              transform={`rotate(${angle.toFixed(1)}, ${lx.toFixed(1)}, ${ly.toFixed(1)})`}
            >
              {label}
            </text>
          )
        })}

        {/* Vertex labels */}
        {vertexLabels.map((label, idx) => {
          if (!label) return null
          return (
            <text
              key={`vl_${idx}`}
              x={pts[idx][0]}
              y={pts[idx][1] - 12}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="13"
              fontWeight="700"
              fill="#4b5563"
              fontStyle="italic"
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
