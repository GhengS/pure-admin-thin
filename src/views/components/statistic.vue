<script setup lang="ts">
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import ReCol from "@/components/ReCol";
import { useTransition } from "@vueuse/core";

defineOptions({
  name: "Statistic"
});

// 年龄
const ageOfLife = ref(0);
// 年中日
const dayOfYear = ref(0);
// 生命日
const daysOfLife = ref(0);
// 明日倒计时
const todayCountdown = ref(dayjs().add(1, "day").startOf("day"));
// 目标日期
const targetDate = ref(dayjs().add(1, "month").startOf("month"));

// const value = ref(dayjs().add(1, "day").startOf("day"));
// const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2);
const value2 = ref(dayjs().add(1, "month").startOf("month"));
// const value2 = ref(dayjs(new Date().getTime()));

const source = ref(0);
const outputValue = useTransition(source, {
  duration: 1500
});
source.value = 36000;

function reset() {
  // value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2;
}

import { MyDateResult, getMyDate } from "@/api/mytime";

const myDateResult = ref<MyDateResult>({
  code: 0,
  data: {
    daysOfLife: 0,
    dayOfYear: 0,
    targetDate: "",
    dayInYear: 0,
    age: 0
  }
});

async function onLogin() {
  myDateResult.value = await getMyDate();
  if (myDateResult.value.code === 200) {
    // console.log(myDateResult.value.data);
    // value2.value = new Date(myDateResult.value.data.targetDate).getTime();
    ageOfLife.value = myDateResult.value.data.age;
    dayOfYear.value = myDateResult.value.data.dayOfYear;
    daysOfLife.value = myDateResult.value.data.daysOfLife;
    todayCountdown.value = dayjs().add(1, "day").startOf("day");
    targetDate.value = dayjs(new Date(myDateResult.value.data.targetDate));
    // Date.now() + 1000 * 60 * 60 * 24 * 2
    // result.data.targetDate = new Date(result.data.targetDate);
  }
}
onMounted(() => {
  onLogin();
});
</script>

<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <div class="card-header">时间记录</div>
      </template>

      <el-row :gutter="24">
        <re-col :value="4" :xs="24" :sm="24">
          <el-statistic title="年龄" :value="ageOfLife" />
        </re-col>
        <re-col :value="4" :xs="24" :sm="24">
          <el-statistic title="年中日" :value="dayOfYear" />
        </re-col>
        <re-col :value="4" :xs="24" :sm="24">
          <el-statistic title="生命日" :value="daysOfLife" />
        </re-col>

        <re-col :value="4" :xs="24" :sm="24">
          <el-countdown title="今日倒计时" :value="todayCountdown" />
        </re-col>

        <!-- <re-col :value="4" :xs="24" :sm="24">
          <el-countdown title="目标日期" format="HH:mm:ss" :value="value2" />
          <el-button class="mt-2" type="primary" text bg @click="reset">
            重置
          </el-button>
        </re-col> -->

        <re-col :value="4" :xs="24" :sm="24">
          <el-countdown format="DD天 HH时 mm分 ss秒" :value="targetDate">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                <IconifyIconOnline icon="ep:calendar" class="mr-2" />
                目标日期
              </div>
            </template>
          </el-countdown>
          <div class="mt-2">{{ value2.format("YYYY-MM-DD") }}</div>
        </re-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.el-col {
  text-align: center;
}
</style>
