<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="col s6">
          <ul class="collection with-header">
            <li class="collection-header"><h4>List of numbers</h4></li>
            <li class="collection-item avatar" v-for="(obj, index) in numbersArray" :key="index">
              <i class="material-icons circle">{{ obj.icon }}</i>
              <span class="title">{{ index }}</span>
              <p>Number - {{ obj.number }}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <h4>List of objects</h4>
          <table class="highlight">
            <thead>
              <tr>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="obj in objectsArray" :key="obj.Id">
                <td>{{ obj.Id }}</td>
                <td>{{ obj.Brand }}</td>
                <td>{{ obj.Model }}</td>
                <td>
                  <a class="waves-effect waves-light btn" @click="fnBuy(obj)"
                    ><i class="material-icons">shopping_cart</i></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <ul class="collection with-header">
            <li class="collection-header"><h4>V-For of one object</h4></li>
            <li class="collection-item" v-for="(value, key, index) in obj" :key="index">
              {{ key + ' - ' + value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbersArray: [
        { icon: 'settings_bluetooth', number: 1},
        { icon: 'settings_brightness', number: 2},
        { icon: 'settings_cell', number: 3},
        { icon: 'settings_ethernet', number: 4},
        { icon: 'settings_input_antenna', number: 5},
        { icon: 'settings_input_component', number: 6},
        { icon: 'settings_input_hdmi', number: 7},
        { icon: 'settings_input_svideo', number: 8},
        { icon: 'settings_overscan', number: 9},
        { icon: 'settings_phone', number: 0}
      ],
      objectsArray: [
        { Id: 0, Brand: 'Chevrolet', Model: 'Aveo' },
        { Id: 1, Brand: 'Honda', Model: 'City' },
        { Id: 2, Brand: 'Volkswagen', Model: 'Jetta' },
        { Id: 3, Brand: 'Dodge', Model: 'Neon' },
        { Id: 4, Brand: 'Chrysler', Model: 'Town and Country' }
      ],
      obj: {
        Id: 0,
        Brand: 'Chevrolet',
        Model: 'Aveo'
      }
    }
  },
  methods: {
    fnBuy(car) {
      alert('Congratulations you just buy a ' + car.Brand + ' - ' + car.Model)
    }
  }
}
</script>

<style scoped>
.value {
  color: #7dd595;
}

.divObject {
  text-decoration: underline;
}
</style>
