<template>
    <div class="md-body">
        <h1>Hello home</h1>
        <p>Edit me</p>
        <div class="card__wrapper" v-for="item in items" :key="item.id">
            <Card :name="`${item.lvl} lvl`" :title="item.title"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/UI/Card'
export default {
    components: { Card },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Archer',
                    descr: 'archer archer archer archer',
                    lvl: 4
                },
                {
                    id: 2,
                    title: 'Wizard',
                    descr: 'Wizard Wizard Wizard Wizard',
                    lvl: 5
                },
            ]
        }
    }
}
</script>