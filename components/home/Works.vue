<template>
  <div class="works">
        <div class="container mx-auto px-20 title-works">
          <h1>Works</h1>
          <div class="underline-works"></div>
        </div>
        <div class="content-works">
            <div class="container mx-auto px-20  list-items">
                <div class="item" id="one">
                    <img src="@/assets/frontend/images/logo/illustration.png" alt="">
                    <h3>Illustration</h3>
                </div>
                <div class="item" id="two">
                    <img src="@/assets/frontend/images/logo/ui_design.png" alt="">
                    <h3>UI Design</h3>
                </div>
                <div class="item three">
                    <img src="@/assets/frontend/images/logo/web_design.png" alt="">
                    <h3>Web Design</h3>
                </div>
                <div class="item four">
                    <img src="@/assets/frontend/images/logo/mobile_app.png" alt="">
                    <h3>Mobile App</h3>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Works'
}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .works {
        margin-top: 100px;
        .title-works {
            width: max-content;
            height: max-content;
            h1 {
                text-align: center;
                font-size: 40px;
                font-weight: bold;
                color: $colorBlack;
            }
            .underline-works {
                background-color: $colorSecondary;
                width: 20%;
                height: 5px;
                border-radius: 20px;
            }
        }
        .content-works {
            margin-top: 30px;
            background-image: url('~@/assets/frontend/images/background_works.png');
            background-repeat: no-repeat;
            background-position: center center;
            height: 100%;
            // object-fit: cover;
            // background-image: linear-gradient(to right, #3093C6 0%, #116D94 100%);
            .list-items {
                padding: 130px 0px;
                display: flex;
                justify-content: space-between;
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 115px;
                        height: 115px;
                    }
                    h3 {
                        margin-top: 15px;
                        font-size: 25px;
                        color: $colorPrimary;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .works {
           .content-works {
                margin-top: 30px;
                height: 100%;
                // object-fit: cover;
                // background-image: linear-gradient(to right, #3093C6 0%, #116D94 100%);
                .list-items {
                    padding: 70px 5px;
                    display: flex;
                    justify-content: space-between;
                    .item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            width: 50px;
                            height: 50px;
                        }
                        h3 {
                            margin-top: 15px;
                            font-size: 15px;
                            color: $colorPrimary;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>