Vue.component('fiche', {
    props:{
        nom:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required: true
        },
        alt:{
            type:String,
            required:true
        },
        inventaire:{
            type:Number,
            required:true
        },
        prix:{
            type:Number,
            required:true
        },
        details:{
            type:Array,
            required:true
        },
        variants:{
            type:Array,
            required:true
        }
    },
    template:`
    <div class="Produit">
    
        <div class="regrouper">
            <div class="image-produit">
                <img v-bind:src="image" v-bind:alt="alt">
            </div>
    
            <div class="details-produit">
    
                <h1 class="nom-produit">{{nom}}</h1>
    
                <p v-if="inventaire > 10" class="stock">En stock.</p>
                <p v-else-if="inventaire < 10 && inventaire > 0" class="presque-indisponible">Dépechez-vous, il n'y en as presque plus !</p>
                <p v-else class="indisponible">Actuellement indisponible</p>
        
                <p class="nombre-restant">Il en reste {{inventaire}}</p>
        
                <p class="prix">{{prix}} Euros</p>
        
                <ul class="liste-details">
                    <li v-for="detail in details" class="detail">{{detail}}</li>
                </ul>
        
                <div v-for="(variant, index) in variants"
                     class="variant"
                     :style="{backgroundColor: variant.variantColor}"
                     @mouseover="changerImageVariant(variant.variantImage, variant.variantQuantity)"></div>
        
                <button class="acheter">Acheter ce produit</button>
    
            </div>
        </div>
        
        
        <div class="barre"></div>
    
    </div>`,
    data() {
        return{}
    },
    methods: {
        changerImageVariant: function (variantImage, variantQuantity){
            this.image = variantImage
            this.inventaire = variantQuantity
        },

    },

})

var product = new Vue ({
    el: '#test',
    data:{
        objets:[
            {
                //infos-produit
                nom: 'Chaussures',

                image: 'images/img1.png',

                alt: 'Image de chaussures',

                prix: 79.99,

                details: ['Vitesse +10%', 'Mana +15%', 'Attaque -5%'],

                variants: [
                    {
                        variantImage: 'images/img.png',
                        variantColor: 'blue',
                        variantQuantity: 15
                    },
                    {
                        variantImage: 'images/img2.jpg',
                        variantColor: 'red',
                        variantQuantity: 4
                    }
                ],
            },
            {
                //infos-produit
                nom: 'Manteau',

                image: 'images/img3.jpg',

                alt: 'Image de Manteau',

                prix: 40.00,

                details: ['Armure +30%', 'Mana +5%', 'Vitesse -10%'],

                variants: [
                    {
                        variantImage: 'images/img3.jpg',
                        variantColor: 'pink',
                        variantQuantity: 50
                    },
                    {
                        variantImage: 'images/img4.jpg',
                        variantColor: 'brown',
                        variantQuantity: 0
                    }
                ],

            },
            {
                //infos-produit
                nom: 'Pull',

                image: 'images/img3.jpg',

                alt: 'Image de Pull',

                prix: 24.99,

                details: ['Armure +30%', 'Mana +5%', 'Vitesse -10%', 'Attaque -3%'],

                variants: [
                    {
                        variantImage: 'images/img3.jpg',
                        variantColor: 'orange',
                        variantQuantity: 17
                    },
                    {
                        variantImage: 'images/img4.jpg',
                        variantColor: 'black',
                        variantQuantity: 3
                    }
                ],

            },
            {
                //infos-produit
                nom: 'Baton-magique',

                image: 'images/img3.jpg',

                alt: 'Image de baton magique',

                prix: 1000000,

                details: ['Fabrique des cookies magiques'],

                variants: [
                    {
                        variantImage: 'images/img3.jpg',
                        variantColor: 'blue',
                        variantQuantity: 23
                    },
                    {
                        variantImage: 'images/img4.jpg',
                        variantColor: 'brown',
                        variantQuantity: 12
                    },
                    {
                        variantImage: 'images/img1.png',
                        variantColor: 'pink',
                        variantQuantity: 3
                    },
                ],

            },
        ],

    },
})