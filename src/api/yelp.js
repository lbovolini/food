import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SWGbsnP6PIb8pUj9gHdQ9fEleyZbKu4cS1668PsdvSZ5Vp6l3NfDkFqh_K0_vrlvYW6KWqHXXyfjgzv6ocBaRJowrHTsgLV_hC_j5zFqjFg-YCAm5DMA6zlFLYvuXXYx'
    }
})