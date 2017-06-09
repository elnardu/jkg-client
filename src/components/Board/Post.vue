<template lang="html">
  <div class="post card my-2"  @click="gotoPost(post._id)">
    <div class="card-block">
      <div class="mb-2 d-flex justify-content-between align-items-center flex-wrap">
        <h3 class="card-title m-0">{{post.title}}</h3>
        <p class="text-success m-0">{{salaryString}}</p>
      </div>
      <p class="card-text">{{post.shortdescription}}</p>
      <p class="card-text"><small class="text-primary mr-1">{{tagsString}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['post'],
  computed: {
    tagsString () {
      let s = ``
      this.post.tags.forEach((t, i) => {
        s += (i !== 0) ? ` | ` : ``
        s += t
      })
      return s
    },
    salaryString () {
      if (!this.post.salary) return `—`

      if (this.post.salary[0] === this.post.salary[1]) return this.post.salary[0]
      else return `${this.post.salary[0]} – ${this.post.salary[1]}`
    }
  },
  methods: {
    gotoPost (postid) {
      this.$router.push(`/post/${postid}`)
    }
  }
}
</script>

<style lang="css" scoped>
  .post {
    cursor: pointer;
    transition: all 0.2s ;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .post:hover {
    transform: scale(1.02,1.02);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }
</style>
