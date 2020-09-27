<template>
  <div class="project">
      <Navbar/>
      <div class="container mx-auto md:px-20 flex content ">
          <div class="left">
            <div class="border"></div>
            <div class="sidebar">
                <button href="#" class="btn-sidebar">
                ILLUSTRATION
                </button>
                <button href="#" class="btn-sidebar">
                    MOBILE APP
                </button>
                <button href="#" class="btn-sidebar">
                    WEBSITE
                </button>
                <button href="#" class="btn-sidebar">
                    UI DESIGN
                </button>
                <h2>Project</h2>
            </div>
          </div>
          <div class="right">
              <div class="right-content">
                  <div class="border"></div>
                  <div class="box">

                      <div class="item">
                          <div class="project-content">
                            <h2>PROJECT 1</h2>
                            <h2>2020</h2>
                          </div>
                          <div class="line"></div>
                          <div class="content-box">

                          </div>
                      </div>

                      <div class="item">
                          <div class="project-content">
                            <h2>PROJECT 2</h2>
                            <h2>2020</h2>
                          </div>
                          <div class="line"></div>
                          <div class="content-box">

                          </div>
                      </div>

                      <div class="item">
                          <div class="project-content">
                            <h2>PROJECT 3</h2>
                            <h2>2020</h2>
                          </div>
                          <div class="line"></div>
                          <div class="content-box">

                          </div>
                      </div>

                      <div class="item">
                          <div class="project-content">
                            <h2>PROJECT 4</h2>
                            <h2>2020</h2>
                          </div>
                          <div class="line"></div>
                          <div class="content-box">

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Project',
    components: {
        Navbar,
        Footer
    },
    layout: 'fun',
    transition: 'slide-bottom'

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .project {
        width: 100%;
        background: rgb(48,147,198);
        background: linear-gradient(90deg, rgba(48,147,198,1) 0%, rgba(48,132,198,1) 100%, rgba(0,212,255,1) 100%);
        .content {
            padding-top: 50px;
            .left {
                width: 40%;
                height: 900px;
                position: relative;

                .border {
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    text-align: center;
                    background-color: $colorSecondary;
                    border-color: $colorSecondary;
                    border-radius: 50px;
                    width: 6px;
                    height: 900px;
                    position: absolute;
                }

                .sidebar {
                    margin-left: -25px;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;

                    .btn-sidebar {
                        background-color: $colorSecondary;
                        color: $colorPrimary;
                        font-weight: bold;
                        padding: 5px 10px;
                        border-radius: 5px;
                        transform: rotate(-90deg);
                    }
                }

                h2 {
                    margin-left: 50px;
                    background-color: inherit;
                    color: $colorPrimary;
                    padding: 5px 0px;
                    font-weight: bold;
                }
            }

            .right {
                width: 60%;
                height: 900px;
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
                                color: $colorPrimary;
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
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .project {
            .content {
                padding-top: 50px;
                display: flex;
                flex-direction: column;
                .left {
                    margin-top: 50px;
                    width: 100%;
                    height: 300px;

                    .border {
                        display: none;
                        height: 0px;
                    }

                    .sidebar {
                        margin-left: 0px;

                        .btn-sidebar {
                            transform: rotate(0deg);
                        }
                    }

                    h2 {
                        margin-left: 0px;
                    }
                }

                .right {
                    width: 100%;
                    height: 900px;
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
            }
        }
    }
</style>