<template>
    <header class="header bg-blue">
        <div class="header__logo bg-red">
            <h2>MD</h2>
        </div>
        <div class="header__nav">
            <ul class="header__navbar-list">
              <li class="header__item-one">
                <RouterLink to="/" class="header__link">
                  <div class="header__content">
                    <span class="header__nav-icon">&#9776;</span>
                    <span class="header__text">Home</span>
                  </div>
                </RouterLink>
                  <hr>
              </li>
              <li class="header__item-one">
                <RouterLink to="/" class="header__link">
                  <div class="header__content">
                    <span class="header__nav-icon">&#9776;</span>
                    <span class="header__text">Portfolio</span>
                  </div>
                </RouterLink>
                  <hr>
              </li>
              <li class="header__item-one">
                <RouterLink to="/" class="header__link">
                  <div class="header__content">
                    <span class="header__nav-icon">&#9776;</span>
                    <span class="header__text">About</span>
                  </div>
                </RouterLink>
                  <hr>
              </li>
              <li class="header__item-one">
                <RouterLink to="/" class="header__link">
                  <div class="header__content">
                    <span class="header__nav-icon">&#9776;</span>
                    <span class="header__text">Contact</span>
                  </div>
                </RouterLink>
                  <hr>
              </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
</style>