<template lang="html">
	<nav class="navbar navbar-toggleable-md navbar-light fixed-top bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">{{$route.name}}</div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/board" active-class="active">Доска</router-link>
        </li>
				<li v-if="logged" class="nav-item">
          <router-link class="nav-link" to="/edit" active-class="active">Редактор</router-link>
        </li>

				<li v-if="!logged" class="nav-item">
          <router-link class="nav-link" to="/login" active-class="active">Вход</router-link>
        </li>
				<li v-if="!logged" class="nav-item">
          <router-link class="nav-link" to="/register" active-class="active">Регистрация</router-link>
        </li>

				<li class="nav-item">
					<router-link class="nav-link" to="/about" active-class="active">О сайте</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['logged'],
  mounted () {
    // Костыль для работы без jquery
    // Navbar and dropdowns
    var toggle = document.getElementsByClassName('navbar-toggler')[0]
    var collapse = document.getElementsByClassName('navbar-collapse')[0]
    var dropdowns = document.getElementsByClassName('dropdown')

    // Toggle if navbar menu is open or closed
    function toggleMenu (e) {
      e.stopPropagation()
      collapse.classList.toggle('collapse')
      collapse.classList.toggle('in')
    }

    // Close all dropdown menus
    function closeMenus () {
      for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open')
        dropdowns[j].classList.remove('open')
      }
    }

    function closeMenu () {
      collapse.classList.add('collapse')
      collapse.classList.remove('in')
    }

    // Add click handling to dropdowns
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', function () {
        if (document.body.clientWidth < 768) {
          var open = this.classList.contains('open')
          closeMenus()
          if (!open) {
            this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open')
            this.classList.toggle('open')
          }
        }
      })
    }

    // Close dropdowns when screen becomes big enough to switch to open by hover
    function closeMenusOnResize () {
      if (document.body.clientWidth >= 768) {
        closeMenus()
        collapse.classList.add('collapse')
        collapse.classList.remove('in')
      }
    }

    // Event listeners
    window.addEventListener('resize', closeMenusOnResize, false)
    document.getElementById('app').addEventListener('click', closeMenu)
    toggle.addEventListener('click', toggleMenu, false)
  }
}
</script>

<style lang="css">
/* тоже костыль */
/*
 * Open dropdowns on hover instead of click.
 */
@media (min-width: 768px) {
  .dropdown:hover {
    background: #e7e7e7;
  }
  .dropdown:hover > .dropdown-menu {
    display: block;
  }
}
/*
 * The following is needed since the dropdowns are <div> elements instead
 * of <a> elements
 */
.nav > li > div {
  position: relative;
  display: block;
  padding: 10px 15px;
  cursor: default;
}
.navbar-nav > li > div {
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 20px;
}
.navbar-default .navbar-nav > li > div {
  color: rgb(119, 119, 119);
}
.navbar-collapse {
  transition: all 1s ease, height 1s ease;
}
.navbar-collapse.in {
  /*height: auto;
  display: block !important;*/
}
.navbar-collapse.collapse {
  display: none;
  /*display: block !important;
  height: 0;
  transform: translateY(-20em);*/
}
.dropdown-open {
  background: #e7e7e7;
}
</style>
