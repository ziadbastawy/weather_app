<template>
    <nav>
        <div>
            <p class="app_name">
                instaweather
            </p>
        </div>
        <div>
            <button class="temp_btn">C</button>
            <button class="temp_btn active">F</button>
        </div>
    </nav>
</template>


<script>
export default {
  name:'navbar'
}
</script>

<style>
nav {
    padding: 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
}

.app_name{
    font-size: 36px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
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
    color: #FFFFFF;
    min-width: 40px;
    padding: .7rem 1.7rem;
}

.temp_btn:nth-child(1).active {
    border-right: 2px solid #fff  ;
}

.temp_btn:nth-child(2).active {
    border-left: 2px solid #fff  ;
}

.active {
    background: rgba(255, 255, 255, 0.5);
}
</style>