<template>
  <nav>
    <div>
      <p class="app_name">instaweather</p>
    </div>
    <div>
      <button
        class="temp_btn"
        :class="{ active: temp_type == 'C' }"
        @click="changeTempType('C')"
      >
        C
      </button>
      <button
        class="temp_btn"
        :class="{ active: temp_type == 'F' }"
        @click="changeTempType('F')"
      >
        F
      </button>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'navbar',
  data () {
    return {
      temp_type: 'F'
    }
  },
  methods: {
    changeTempType (type) {
      this.temp_type = type
      this.$emit('changeType', type)
    }
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 1.5rem 0;
}

.app_name {
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-transform: uppercase;
  mix-blend-mode: normal;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  margin: 0;
}

.temp_btn {
  background: transparent;
  border: none;
  font-size: 24px;
  color: #ffffff;
  min-width: 40px;
  padding: 0.7rem 1.7rem;
  outline: none;
  cursor: pointer;
}

.temp_btn:nth-child(1).active {
  border-right: 2px solid #fff;
}

.temp_btn:nth-child(2).active {
  border-left: 2px solid #fff;
}
.type:focus {
  outline: none;
}

.active {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1024px) and (min-width: 768px) {
  .app_name {
    font-size: 26px;
  }
}
@media (max-width: 767px) and (min-width: 350px) {
  .app_name {
    font-size: 1rem;
  }
  .temp_btn {
    font-size: 18px;
    min-width: 30px;
    padding: 0.4rem 1.2rem;
  }
}
</style>