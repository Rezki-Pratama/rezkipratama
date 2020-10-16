<template>
  <div class="project">
      <Navbar/>
      <div class="container mx-auto md:px-20 flex content ">
          <div class="left">
            <div class="border"></div>
            <div class="sidebar">
                <button v-on:click="component = 'ProjectIllustration'" class="btn-sidebar">
                ILLUSTRATION
                </button>
                <button href="#" class="btn-sidebar">
                    MOBILE APP
                </button>
                <button href="#" class="btn-sidebar">
                    WEBSITE
                </button>
                <button v-on:click="component = 'ProjectUI'" class="btn-sidebar">
                    UI DESIGN
                </button>
                <h2>Project</h2>
            </div>
          </div>
          <div class="right">
            <component v-bind:is="component"></component>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ProjectUI from '@/components/project/ProjectUI.vue';
import ProjectIllustration from '@/components/project/ProjectIllustration.vue';
export default {
    name: 'Project',
    components: {
        Navbar,
        ProjectUI,
        ProjectIllustration,
        Footer
    },
    data() {
        return {
            component: 'ProjectUI',
        }
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
        background: linear-gradient(90deg, rgb(8, 146, 173) 0%, rgb(8, 146, 173) 100%, rgba(0,212,255,1) 100%);
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
                }
            }
        }
    }
</style>