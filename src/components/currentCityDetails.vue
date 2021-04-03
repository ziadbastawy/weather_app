<template>
    <section class="current_city">
        <div class="current_city_details">
            <h1 class="current_city_details_header">new cairo</h1>
            <p class="date">Friday 20, 2020</p>
            <img  class="waether_icon" src="../assets/sunny_cloud.svg" alt="iocn"/>
            <p class="status">Cloudy</p>
        </div>
        <div class="current_city_temp_details">
            <h1 class="current_temp">72 <sup> &deg; </sup></h1>
            <p class="temp_range">
                <span> 81  &deg; </span> / <span class="lower_temp"> 63  &deg; </span>
            </p>
            <p class="temp_summary">
                Cloudy throughout the day
            </p>
        </div>
    </section>
</template>

<script>
export default {
  name:'temperature_details' 
}
</script>

<style>
.current_city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    flex-wrap: wrap;
}
.current_city .current_city_details_header {
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
}
.current_city .date {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.05em;
}
.current_city .status {
    font-size: 30px;
    line-height: 35px;
}
.current_city .current_temp {
    font-size: 144px;
    line-height: 169px;
    letter-spacing: 0.05em;
    margin: 20px 0px

}

.current_city .temp_range {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.05em;
}
.current_city .temp_range .lower_temp {
    color: rgba(255, 255, 255, 0.75);
}
.current_city .temp_summary {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
}

</style>