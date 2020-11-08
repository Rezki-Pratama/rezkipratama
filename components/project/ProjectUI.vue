<template>
    <div class="design-ui">
        <div class="right-content">
            <div class="border"></div>
            <div class="box">
                <div class="item" v-for="item in uidesign" v-bind:key="item.key">
                    <div class="project-content">
                        <h2>{{ item.name }}</h2>
                        <h2>{{ item.year }}</h2>
                    </div>
                    <div class="line"></div>
                    <div class="content-box">
                        <img :src="item.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectUI',
    data() {
        return {
            uidesign: [
                {
                    name: 'Social Media App',
                    year: '2020',
                    image: require('@/assets/frontend/images/SocialMedia.webp')
                },
                {
                    name: 'Smart Quran',
                    year: '2020',
                    image: require('@/assets/frontend/images/SmartQuran.webp')
                },
                {
                    name: 'MyDiabetes Redesign',
                    year: '2020',
                    image: require('@/assets/frontend/images/Diabetes.webp')
                },
                {
                    name: 'Chocolicious App Redesign',
                    year: '2020',
                    image: require('@/assets/frontend/images/Chocolicious.webp')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .right-content {
        position: relative;

        .border {
            margin-left: auto;
            margin-right: auto;
            left: 45%;
            right: 0;
            text-align: center;
            background-color: $colorSecondary;
            border-color: $colorSecondary;
            border-radius: 50px;
            width: 6px;
            height: 900px;
            position: absolute;
        }

        .box {
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            margin-top: 10%;
            margin-bottom: 10%;
            text-align: center;
            position: absolute;
            width: 90%;
            height: 800px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .item {
                align-items: center;
                display: flex;
                justify-content: space-between;
                .project-content {
                    text-align: right;
                    font-weight: bold;
                    border-color: $colorSecondary;
                    border-style: solid;
                    color: $colorBlack;
                    width: 30%;
                }
                .line {
                    height: 6px;
                    width: 15%;
                    border-radius: 50px;
                    background-color: $colorSecondary;
                    border-color: $colorSecondary;
                    margin: 0px 20px;
                }
                .content-box {
                    background-color: $colorPrimary;
                    width: 50%;
                    height: 150px;
                    border-radius: 30px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 30px;
                    }
                }
            }
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .right-content {
            position: relative;

            .border {
                left: 35%;
            }
            .box {
                .item {
                    .project-content {
                        width: 30%;
                        font-size: 15px;
                    }
                    .line {
                        width: 10%;
                        margin: 0px 10px;
                    }
                    .content-box {
                        width: 70%;
                    }
                }
            }
        }
    }
</style>