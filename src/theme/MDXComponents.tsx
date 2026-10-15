// Registers components that every doc page can use without an import line.
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Checklist from '@site/src/components/Checklist';
import CommitBuilder from '@site/src/components/CommitBuilder';

export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  Checklist,
  CommitBuilder,
};
