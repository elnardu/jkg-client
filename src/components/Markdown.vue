<template lang="html">
  <div class="markdown" v-html="markdownHtml">
  </div>
</template>

<script>
import {markdown} from 'markdown'
export default {
  name: 'markdown',
  props: ['rawtext'],
  computed: {
    markdownHtml () {
      return markdown.toHTML(this.rawtext).replace(/\r\n/g, `<br />`).replace(/\n/g, `<br />`)
    }
  }
}
</script>

<style lang="css" scoped>
  .markdown {
    width: 100%;
  }
</style>
