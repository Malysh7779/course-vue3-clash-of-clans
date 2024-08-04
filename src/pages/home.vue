<template>
    <div class="md-body">
        <div class="card__wrapper" v-for="item in items" :key="item.id">
            <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
                {{ item.descr }}
            </Card>
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
                    img: require('@/assets/img/archer.png'),
                    lvl: 4
                },
                {
                    id: 2,
                    title: 'Wizard',
                    descr: 'Wizard Wizard Wizard Wizard',
                    img: require('@/assets/img/wizard.png'),
                    lvl: 5
                },
            ]
        }
    }
}
</script>