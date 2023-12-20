<template>
  <div>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Dash</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">POSTS A</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
          </ul>
        </div>
      </div>
    </nav>

    <!--- render router view -->
    <router-view></router-view>

  </div>
</template>