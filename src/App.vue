<template>
    <div id="app">
      <h1 style="color: white;">AceOnline Framebreak Calculator **BOPE** </h1>
      <label style="color: white;" for="baseRea">Base Reattack Time:</label>
      <input v-model="baseRea" type="number" step="0.01" />
  
      <label style="color: white;" for="firingMode">Firing Mode:</label>
      <input v-model="firingMode" type="number" />
  
      <label style="color: white;" for="fps">FPS:</label>
      <input v-model="fps" type="number" />
  
      <button @click="calculateBreakpoints">Calculate Breakpoints</button>
  
      <div v-if="breakpoints.length > 0">
        <h2 style="color: white;">Breakpoints:</h2>
        <table style="width:100%; color: white;">
          <thead>
            <tr>
              <th>Rea</th>
              <th>BPS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bp in breakpoints" :key="bp.rea">
              <td>{{ bp.rea }}</td>
              <td>{{ bp.bps }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        baseRea: 0.45,
        firingMode: 3,
        fps: 60,
        breakpoints: [],
      };
    },
    methods: {
      calculateBreakpoints() {
        import('aceonline-framebreak').then((module) => {
          this.breakpoints = module.default(this.baseRea, this.firingMode, this.fps);
        });
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: black;
    padding: 20px;
  }
  
  input,
  button {
    margin: 5px;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid white;
    padding: 8px;
    text-align: left;
  }
  </style>
  
  