import { observer } from 'mobx-react';
import { editor } from '@stores/editor';
import My from './my';
import Image from './image';
import Text from './text';
import More from './more';
import Template from './template';
import Layers from './layers';
// import styles from './sources.module.less';

export interface IProps {}

function Sources(props: IProps) {
  return (
    <>
      <Template show={editor.sourceType === 'template'} />
      <My show={editor.sourceType === 'my'} />
      <Image show={editor.sourceType === 'image'} />
      <Text show={editor.sourceType === 'text'} />
      <Layers show={['layers', 'pages', 'projects'].includes(editor.sourceType)} />
      <More show={editor.sourceType === 'more'} />
    </>
  );
}

export default observer(Sources);