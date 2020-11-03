<template>
    <div class="skill">
        <div class="container mx-auto px-20 title-Skill">
          <h1>Skills</h1>
          <div class="underline-skill"></div>
        </div>
        <div class="container mx-auto px-20 content-skill">
            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/html5.svg" alt="">
                        </div>
                    </div>
                    <h2 class="text">HTML</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/css.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">CSS</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/sass.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">SASS</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/flutter.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">FLUTTER</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/adobexd.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">ADOBE XD</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/figma.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">FIGMA</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/javascript.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">JAVASCRIPT</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/vue.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">VUE</h2>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                            <circle cx="70" cy="70" r="70" shape-rendering="geometricPrecision"></circle>
                        </svg>
                        <div class="number">
                            <img src="~@/assets/frontend/images/logo/bootstrap.webp" alt="">
                        </div>
                    </div>
                    <h2 class="text">BOOTSTRAP</h2>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill',

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .skill {
        margin-top: 100px;
        .title-Skill {
            width: max-content;
            height: max-content;
            h1 {
                text-align: center;
                font-size: 40px;
                font-weight: bold;
                color: $colorBlack;
            }
            .underline-skill {
                background-color: $colorSecondary;
                width: 100%;
                height: 5px;
                border-radius: 20px;
            }
        }

        .content-skill {
            margin-top: 50px;
            margin-bottom: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .card {
                width: 200px;
                height: 250px;
                display: flex;
                margin: 0px 10px;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                text-align: center;
                overflow: hidden;
                transition: 0.5s;
                // background: linear-gradient(0deg,#1b1b1b, #222, #1b1b1b);

                .box {
                    .percent {
                        position: relative;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        svg {
                            position: relative;
                            width: 150px;
                            height: 150px;
                            z-index: 1000;

                            circle {
                                width: 100%;
                                height: 100%;
                                fill: none;
                                stroke: #191919;
                                stroke-width: 10;
                                stroke-linecap: round;
                                transform: translate(5px, 5px);
                            }

                            circle:nth-child(2) {
                                stroke-dasharray: 440;
                                stroke: $colorSecondary;
                            }
                        }

                        .number {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit:contain;
                                padding: 40px;
                            }

                            h2 {
                                color: #777;
                                font-weight: 700;
                                font-size: 40px;
                                transition: 0.5s;
                            }
                        }
                    }

                    .text {
                        position: relative;
                        margin-top: 20px;
                        color: $colorBlack;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: 1;
                        text-transform: uppercase;
                        transition: 0.5px;
                    }
                }

                &:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 35px rgba(0,0,0,.5);
                }

                &:hover .number h2 {
                    color: #fff;
                    font-size: 60px;
                }
            }

            .card:nth-child(1) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            .card:nth-child(2) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            .card:nth-child(3) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            .card:nth-child(4) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 70) / 100);
            }

            .card:nth-child(5) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            .card:nth-child(6) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            .card:nth-child(7) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 60) / 100);
            }

            .card:nth-child(8) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 70) / 100);
            }

            .card:nth-child(9) svg circle:nth-child(2) {
                stroke-dashoffset: (440 - (440 * 80) / 100);
            }

            // .card:before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: -50%;
            //     width: 100%;
            //     height: 100%;
            //     pointer-events: none;
            //     background: rgba(255, 255, 255, .03);
            //     z-index: 1;
            // }
        }
    }
</style>