<template>
  <div>
    <div>
      <label for="schoolName">学校名称：</label>
      <input type="text" id="schoolName" v-model="schoolName"  placeholder="请输入学校名称" />
      <button @click="locateBySchoolName">定位</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label for="longitude">经度：</label>
      <input type="text" id="longitude" v-model="longitude" placeholder="请输入经度"/>
      &nbsp;
      <label for="latitude">纬度：</label>
      <input type="text" id="latitude" v-model="latitude" placeholder="请输入纬度"/>

      <button @click="locateByCoordinates">定位</button>
    </div>
    <div id="map-container" style="width: 100%; height: 800px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolName: "",
      longitude: "",
      latitude: "",
      map: null
    };
  },
  mounted() {
    this.loadBaiduMapAPI().then(() => {
      this.initMap();
    });
  },
  methods: {
    loadBaiduMapAPI() {
      return new Promise((resolve, reject) => {
        if (window.BMap) {
          resolve();
        } else {
          window.initBaiduMap = () => {
            resolve();
          };
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = `https://api.map.baidu.com/api?v=3.0&ak=nPb4RAIHWhMIfZ1XXa8d0bqE9bwuG3yx&callback=initBaiduMap`;
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    },
    initMap() {
      const map = new BMap.Map("map-container");
      const geocoder = new BMap.Geocoder(); // 创建地理编码实例

      // 使用地理编码获取泉州信息工程学院的经纬度
      geocoder.getPoint("泉州信息工程学院", (point) => {
        if (point) {
          map.centerAndZoom(point, 15);

          const marker = new BMap.Marker(point);
          map.addOverlay(marker);
        } else {
          console.error("未找到泉州信息工程学院的位置");
        }
      }, "泉州市");

      map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放功能

      this.map = map;
    },
    locateBySchoolName() {
      const geocoder = new BMap.Geocoder(); // 创建地理编码实例

      geocoder.getPoint(this.schoolName, (point) => {
        if (point) {
          this.map.centerAndZoom(point, 15);

          const marker = new BMap.Marker(point);
          this.map.clearOverlays();
          this.map.addOverlay(marker);

          this.map.panTo(point);
        } else {
          console.error("未找到该学校的位置");
        }
      }, { city: null });
    },
    locateByCoordinates() {
      const latitude = parseFloat(this.latitude);
      const longitude = parseFloat(this.longitude);

      if (!isNaN(latitude) && !isNaN(longitude)) {
        const point = new BMap.Point(longitude, latitude);

        const marker = new BMap.Marker(point);
        this.map.clearOverlays();
        this.map.addOverlay(marker);

        this.map.panTo(point);
      } else {
        console.error("无效的经纬度");
      }
    }
  }
};
</script>
