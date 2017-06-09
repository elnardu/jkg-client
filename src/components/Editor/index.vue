<template lang="html">
  <div class="editor container-fluid d-flex justify-content-center">
    <div class="col-12 col-md-8">
      <h2>Добавить новый пост</h2>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="InputTitle">Заголовок</label>
          <input type="text" class="form-control" id="InputTitle" v-model="post.title"/>
        </div>
        <div class="form-group">
          <label for="InputShortdescription">Короткое описание</label>
          <textarea rows="3" type="text" class="form-control" id="InputShortdescription" v-model="post.shortdescription"/>
        </div>
        <div class="form-group">
          <label for="InputDescription">Описание</label>
          <textarea rows="5" type="text" class="form-control" id="InputDescription" v-model="post.description"/>
          <small class="form-text text-muted">Markdown поддерживается</small>
        </div>
        <div class="form-group row">
          <label for="InputSalary1" class="col-2 col-form-label">От</label>
          <div class="col-10">
            <input type="text" class="form-control" id="InputSalary1" v-model="post.salary[0]"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="InputSalary2" class="col-2 col-form-label">До</label>
          <div class="col-10">
            <input type="text" class="form-control" id="InputSalary2" v-model="post.salary[1]"/>
          </div>
        </div>
        <div class="form-group">
          <label for="InputTags">Теги</label>
          <select multiple class="form-control" id="InputTags" v-model="post.tags">
            <option>JS</option>
            <option>Python</option>
            <option>Go</option>
            <option>C++</option>
            <option>Ruby</option>
          </select>
        </div>
        <button type="button" name="button" class="btn btn-success" @click="preview">Предпросмотр</button>
        <button type="submit" name="button" class="btn btn-danger">Добавить</button>

      </form>
      <Markdown v-if="isPreviewing" class="markdown mt-2 pt-2" :rawtext="post.description"/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
export default {
  name: 'editor',
  components: {
    Markdown
  },
  data () {
    return {
      post: {
        title: ``,
        shortdescription: ``,
        description: ``,
        salary: [0, 0],
        tags: []
      },
      isPreviewing: false
    }
  },
  methods: {
    preview () {
      this.isPreviewing = true
      console.log(this.post.description)
    },
    submit () {
      this.$http.post(`/api/post/add`, this.post, {
        headers: {
          Authorization: localStorage.token
        }
      }).then(res => {
        if (res.body.success) this.$router.push(`/`)
      })
    }
  },
  watch: {
    post: {
      handler: function (val, oldVal) {
        this.isPreviewing = false
      },
      deep: true
    }
  }
}
</script>

<style lang="css" scoped>
.editor {
  margin-top: 45px;
  padding-top: 25px;
  padding-bottom: 50px;
  overflow-y: auto;
  /*height: auto;*/
}

.markdown {
  border-top: solid 1px black;
}
</style>
