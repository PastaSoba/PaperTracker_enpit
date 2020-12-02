import React, { useState } from "react"
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

function ColordRect(props) {
    const [color, setColor] = useState('green', 0);

    return (
      <Rect
        x={100*props.col}
        y={50*props.row}
        width={100}
        height={50}
        fill={color}
        shadowBlur={5}
        onClick={() => setColor(Konva.Util.getRandomColor())}
      />
    )
}

class Viewer extends React.Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* citationsについての可視化部分 */}
        {(() => {
          const items = [];
          let citations = this.props.citations;
          let row = 0; let col = 0; // 論文セル表示位置

          for(let i=0; i<citations.length; i++) {
            if(i===0){
              // Doing None
            } else if(citations[i]["year"] === citations[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
            }

            items.push(
              <ColordRect 
                title={citations[i]}
                row={row}
                col={col}
              />
            );
          }
          return items
        })()}
      </Layer>
      </Stage>
    );
  }
}

export default Viewer;