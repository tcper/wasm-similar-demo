import React, {useEffect, useState} from 'react';
import './App.css';
import { PrimaryButton, MessageBar } from '@fluentui/react'
import { useId } from '@fluentui/react-hooks';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Separator } from '@fluentui/react/lib/Separator';
import { Label } from '@fluentui/react/lib/Label';
import * as wasm from 'wasm-similar';

const stackStyles = { root: { width: 650 } };
const stackTokens = { childrenGap: 50 };
const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const style = {
  background: '#ffffff',
  padding: '28px',
  marginBottom: '28px',
  borderRadius: 2,
  backgroundClip: 'padding-box',
  boxShadow: '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
  width: '800px',
  height: '400px',
  textAlign: 'left'
}

function App() {
  const tooltipId = useId('tooltip');
  const [source, setSource] = useState('一道黑，两道黑，三四五六七道黑，八道九道十道黑。我买了一个烟袋乌木杆儿，我是掐着它的两头那么一道黑。二兄弟描眉来演戏，瞧着他的镜子两道黑。粉皮墙上写“川”字，横瞧竖瞧三道黑。');
  const [target, setTarget] = useState('二道黑，两道黑，三四五六七道黑，拔到九道十道黑。我买了一个烟袋乌木杆，的两头那么一道黑嘿嘿嘿。二兄弟描眉来演戏，瞧着他的镜子两道黑。粉皮墙上写“川”字，横瞧竖瞧三道黑。');
  const [result, setResult] = useState();
  useEffect(() => {
  }, []);

  const red = {
    background: '#fff2f0',
    color: 'black',
    textDecoration:"line-through"
  }

  const green = {
    background: '#f6ffed',
    color: 'black',
  }

  const black = {
    background: '#fff',
    color: 'black',
  }

  const compareHandler = () => {
    const list = wasm.compare_from_chars(source, target);
    
    const elements = list.map((item, index) => {
      if (item.op === ' ') {
        return <span key={index} style={black}>{item.text}</span>;
      }
      if (item.op === '+') {
        return <span key={index} style={green}>{item.text}</span>;
      }
      if (item.op === '-') {
        return <span key={index} style={red}>{item.text}</span>;
      }
      return ''
    });
    setResult(elements)
  }
  return (
    <div className="App">
      <header className="App-header">
      
      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <MessageBar>
        This is a simple demo shows how this wasm-similar works.
        展示wasm-similar的效果
      </MessageBar>
        </Stack>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
          
          <Stack {...columnProps}>
            <TextField label="Source Text 原文" multiline autoAdjustHeight value={source} onChange={(e, newValue) => setSource(newValue)} />
          </Stack>
          <Stack {...columnProps}>
            <TextField label="Target Text 修改" multiline autoAdjustHeight value={target} onChange={(e, newValue) => setTarget(newValue)} />
          </Stack>
        </Stack>
        <Separator></Separator>

        <PrimaryButton aria-describedby={tooltipId} text="Compare 点击查看效果" onClick={compareHandler} />
        
        <Separator></Separator>
        <Label>Diff result</Label>
        <div style={style}>
          {result}
        </div>
      </header>
    </div>
  );
}

export default App;
