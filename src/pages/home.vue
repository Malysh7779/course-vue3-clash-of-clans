<template>
    <div class="md-body">
        <div class="card__wrapper" v-for="item in items" :key="item.id">
            <Card 
                :name="`${item.lvl} lvl`" 
                :title="item.title" 
                :imgUrl="item.img"
                :link="`/${item.alias}`">
                <template v-slot:body>
                    {{ item.descr }}
                </template>
                <template v-slot:footer>
                    <div class="card-stats">
                        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
                            <div class="stat-value">{{ stat.value }}</div>
                            <div class="stat">{{ stat.title }}</div>
                        </div>
                    </div>
                </template>

            </Card>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items.js'
import Card from '@/components/UI/Card'
export default {
    components: { Card },
    data() {
        return {
            items: items
        }
    }
}
</script>