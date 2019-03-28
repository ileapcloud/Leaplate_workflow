<template>
    <div>Your content goes here.</div>
</template>

<script>

import { Meteor } from 'meteor/meteor'
import { Metrics } from '../api/collections'

export default {
    name:'scene',
    components:{
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
    },
    meteor: {
        $subscribe: {
            // subscribe to mongodb collection.
        },
        updateData () {
            // update UI when there is new data.
        }
    }
}
</script>

<style scoped>
[v-cloak]{
    display: none;
}
</style>



