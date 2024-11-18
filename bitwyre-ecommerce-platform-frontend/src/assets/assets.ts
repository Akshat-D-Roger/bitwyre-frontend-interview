import logo from './logo.svg'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    star_dull_icon,
    star_icon,
    contact_img,
    cross_icon
}

export type productsType = {
    _id:string,
    name:string,
    description:string,
    price:number,
    image:string[],
    video:string
    category:string,
    subCategory:string,
    sizes:string[],
    bestSeller:boolean,
    available:"Available"|"Out of Stock",
    seller:"Bitwyre"|"Others"
}

export const products:productsType[] = [
    {
        "_id": "056e21aa-ac66-48ac-a2db-bafad1969186",
        "name": "Men's Woven Trousers",
        "description": "Lightweight and ready for whatever, these woven nylon trousers have a water-repellent finish to help you stay dry when rain rolls in. Plus, elastic drawcords at the hem give you styling power.",
        "price": 500,
        "category": "Men",
        "subCategory": "Bottomwear",
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "bestSeller": true,
        "seller":"Bitwyre",
        "available": "Available",
        "video":"https://res.cloudinary.com/daxxta2o2/video/upload/v1731619178/Videos/nfk7eetjd6xpm1l5fnyr.mp4",
        "image": [
          "https://res.cloudinary.com/daxxta2o2/image/upload/v1731660404/af1gmkfndjk1pcjddmvu.webp", "https://res.cloudinary.com/daxxta2o2/image/upload/v1731660404/vvu8tkfbe29pmannsb30.webp","https://res.cloudinary.com/daxxta2o2/image/upload/v1731660404/obrbtuvqcev9b9duxryt.webp"
        ]
    },
    {
        "_id": "056e21aa-ac66-48ac-a2db-bafad1969188",
        "name": "Men's Jordan T-shirt",
        "description": "The only thing that could make a classic tee better? A classic sneaker. Made from 100% cotton, this relaxed tee features a small embroidered AJ1 patch for a subtle hit of cool.",
        "price": 300,
        "category": "Men",
        "subCategory": "Topwear",
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "bestSeller": true,
        "seller":"Bitwyre",
        "available": "Available",
        "video":"https://res.cloudinary.com/daxxta2o2/video/upload/v1731660490/Videos/swugjdd05hqido5de8db.mp4",
        "image": [
          "https://res.cloudinary.com/daxxta2o2/image/upload/v1731660459/fyykfxn3aqpsvt2l7w8j.jpg", "https://res.cloudinary.com/daxxta2o2/image/upload/v1731660459/obhhub1fhdtbi4bauuhh.webp", "https://res.cloudinary.com/daxxta2o2/image/upload/v1731660459/v0ydp3zegtxswcsyhwdv.jpg"
        ]
    },
    {
      "_id": "056e21aa-ac66-48ac-a2db-bafad1969185",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 200,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/k4zvakjjbxbysyp3ssyb.png"
      ]
    },
    {
      "_id": "058f85ed-3e9a-460a-903f-71b9fd3afdfe",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 160,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/t45roz4xalvhwpw1fx5c.png"
      ]
    },
    {
      "_id": "05b3e15c-baa2-434e-bfad-a1c3b6a49b29",
      "name": "Kid Tapered Slim Fit Trouser",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 280,
      "category": "Kids",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/cynyubxy8zpefnow3fbn.png"
      ]
    },
    {
      "_id": "05cf1c78-b564-43c0-8e9d-73f2ed55d2f3",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 240,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/ew0aji0bt6ovkdwyj89u.png"
      ]
    },
    {
      "_id": "0d454f06-8dd5-4da5-93b6-7f6990412cd9",
      "name": "Men Tapered Fit Flat-Front Trousers",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 150,
      "category": "Men",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/esa18ly0faqlu5rgms18.png"
      ]
    },
    {
      "_id": "17f8fb0b-0a98-4729-a7fe-5e1e31381acc",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 220,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/wle5vuj53ll4kkd331ru.png"
      ]
    },
    {
      "_id": "19828ab1-048f-453b-b889-a662ca4865cd",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 280,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/klzqrewugpybgtmcfnkv.png"
      ]
    },
    {
      "_id": "1ba9caa9-a317-405f-b0ef-095d873a0341",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 180,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/epnxjnoofimzesvdk1s3.png"
      ]
    },
    {
      "_id": "1da1058e-1045-49a9-9818-8371d96d4947",
      "name": "Kid Tapered Slim Fit Trouser",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 300,
      "category": "Kids",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/q6kdpkvpdhc9ylcn3jjt.png"
      ]
    },
    {
      "_id": "28ab4e60-0a15-4ced-8d3e-010f1d771382",
      "name": "Women Palazzo Pants with Waist Belt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 190,
      "category": "Women",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/udxbiu1dljvmzuxgiowi.png"
      ]
    },
    {
      "_id": "3582ccfa-7183-4c80-8c20-a8246b1e1360",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 290,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/khunrnvpooxqvrinlysg.png"
      ]
    },
    {
      "_id": "417f5d34-3eef-4df2-83d1-2ccb3d031f1c",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 210,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/bx9m5i2xytchnekxjyhs.png"
      ]
    },
    {
      "_id": "432481fd-02a6-40c5-8473-fca6a2abffe0",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 240,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/mnpimqrs4oyhzrranrlb.png"
      ]
    },
    {
      "_id": "43934798-f417-4c0f-9115-42477938166a",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 250,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/jrxsurgrm5ptxpjbzdp6.png"
      ]
    },
    {
      "_id": "447ab99c-fc01-45d2-8020-3ecbbdfc7a71",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 190,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/p77jes5eyrb1ds5fthiz.png"
      ]
    },
    {
      "_id": "45e3899b-66ae-42e4-8f3a-23d604bc5015",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 300,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/tghdadptze9wqlcexw2u.png"
      ]
    },
    {
      "_id": "48366ac9-1dac-406d-9263-7c829f65fc56",
      "name": "Men Printed Plain Cotton Shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 260,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/n70fdmpxrnww7ixgu0yk.png"
      ]
    },
    {
      "_id": "4bb4c284-d0fe-4ae4-bc58-a94d2b052a4a",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 330,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/fnwcjynofrrzhm1ntceu.png"
      ]
    },
    {
      "_id": "4c84f1af-1bb4-4aba-81e0-9b9b0696163f",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 310,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/zweujaztzgq0otujsvvl.png"
      ]
    },
    {
      "_id": "4d6dd60a-cd07-443b-87d2-1a63b0e1182f",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 130,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/zxcof76scln0wqhj79ir.png"
      ]
    },
    {
      "_id": "4da51df5-b7ab-4582-a339-e03e587bba8c",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 320,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/bvlzipwv5bs4zluhptjv.png"
      ]
    },
    {
      "_id": "599b26ad-9abd-4e0f-aa26-87b1cfcdcd25",
      "name": "Women Palazzo Pants with Waist Belt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 200,
      "category": "Women",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/i3zgc2ua5lf7vp5bn7pk.png"
      ]
    },
    {
      "_id": "617013b5-fbc1-4ae2-8300-757df4e356d3",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 140,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "L",
        "XL"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/cmxurfenv9uhbkghmyzn.png"
      ]
    },
    {
      "_id": "6439b747-6c25-4658-b69b-6eb8ade204cd",
      "name": "Men Tapered Fit Flat-Front Trousers",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 140,
      "category": "Men",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949544/xawdcbutvrueh5aefncu.png"
      ]
    },
    {
      "_id": "6596ca01-83f7-4925-93a4-7404ac6babcc",
      "name": "Kid Tapered Slim Fit Trouser",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 340,
      "category": "Kids",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/pqshyxnmewhlgdz6hgal.png"
      ]
    },
    {
      "_id": "65d44a1f-7ca8-4338-84d3-71acead56d89",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 220,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/ivgbpaw1pkfbhkmdevv6.png"
      ]
    },
    {
      "_id": "6737fbb4-3825-4c78-94e5-a6fb08a4db7e",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 320,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/rw01o8pftsm1ojlfk1bf.png"
      ]
    },
    {
      "_id": "67c681af-52fe-41ab-bd91-f0b5d68fcc1a",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 150,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/dvhnzpdcm6o2xvdg6mud.png"
      ]
    },
    {
      "_id": "69fb7427-2e6a-45b0-88e6-345f469355ae",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 140,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/enfxb5jiejevqlyvydmj.png"
      ]
    },
    {
      "_id": "8a3bd48c-4f7c-447a-94b0-7ae3ea1d34c7",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 170,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/ef1yksod8d6ru2xpqcao.png"
      ]
    },
    {
      "_id": "8a9a8e9f-73f9-4b0c-ad14-b8dcfb26c465",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 210,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/d3kfkh0q4cggrnqsteac.png"
      ]
    },
    {
      "_id": "8ce4bbc7-99bd-4289-aff0-0e15dfe819dc",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 270,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/cr1b4bid7tfczkj9m4oj.png"
      ]
    },
    {
      "_id": "93ae5746-9a53-40dc-84d8-ef1dd5c4b302",
      "name": "Men Tapered Fit Flat-Front Trousers",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 190,
      "category": "Men",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/l86yrkie0ni9jdaidrgl.png"
      ]
    },
    {
      "_id": "990b8569-4bf6-4637-ad23-0eddd3953558",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 250,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/li0x8cdia9v8rivk9ugt.png"
      ]
    },
    {
      "_id": "9926df80-105d-4bb6-b875-f69212055b86",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 180,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/m2u3xgstkqkcjmk6xbif.png"
      ]
    },
    {
      "_id": "9eff1422-ba6b-4e58-8446-49190e05a0b7",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 100,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/dsjn9msx2tkll7x4vrd2.png"
      ]
    },
    {
      "_id": "a93dd923-ae1c-41af-9a4d-e59f37e08ab1",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 200,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "M",
        "L",
        "XL"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/cpjwsc6rbnayzb0ueulg.png",
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/jeyjwbaasdxvshvqfb4a.png",
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/z4ygxw4figigryk4y1mu.png",
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/aozribedd7p2avmdpsoy.png"
      ]
    },
    {
      "_id": "aa213004-f98d-440c-90bc-3822c5abe6d8",
      "name": "Kid Tapered Slim Fit Trouser",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 310,
      "category": "Kids",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/vzs0ztvhm4ykl8lxif25.png"
      ]
    },
    {
      "_id": "aed65a78-2636-4818-bd7c-421919949d28",
      "name": "Boy Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 160,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/rljeesiotp1hielfnlaa.png"
      ]
    },
    {
      "_id": "b6fba10b-435b-4e95-97c8-54a17d814377",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 220,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "L",
        "XL"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949544/jkhowyuaqn2yi1uepypm.png"
      ]
    },
    {
      "_id": "b99558d5-45bb-4ee2-81c0-e5d3432916fc",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 230,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/q4ixxhxhixnz4vajrob8.png"
      ]
    },
    {
      "_id": "bf768a83-8ee4-45ae-8c73-3cebcc5fda6f",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 120,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/u1pf90lczk22satqsdab.png"
      ]
    },
    {
      "_id": "c54c4afa-d55b-47c9-902c-7d31a56ce3bf",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 350,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/bvqysmip2pvxrwkdx7g8.png"
      ]
    },
    {
      "_id": "c85fc850-85bd-4ccf-a684-b8233c9b7892",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 110,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "XXL"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Available",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/eptnvfjzij8sarcaibue.png"
      ]
    },
    {
      "_id": "c976378a-6ddf-4599-b121-d75ed1519c3c",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 130,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "M",
        "L",
        "XL"
      ],
      "bestSeller": true,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/fby1vm49duot8prtgini.png"
      ]
    },
    {
      "_id": "ca3dc62c-d6be-4c72-b3b2-80d1479dd4b1",
      "name": "Girls Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 100,
      "category": "Kids",
      "subCategory": "Topwear",
      "sizes": [
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/bbana4liuu2yhytl2iiz.png"
      ]
    },
    {
      "_id": "df42d17e-58df-4b5c-a787-57f9231793e4",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 290,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/y14kvhlkrzyob2n5wo1u.png"
      ]
    },
    {
      "_id": "e63e8106-adeb-4474-b3e9-f725ffb443ed",
      "name": "Men Slim Fit Relaxed Denim Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 230,
      "category": "Men",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/k96dudz3pbspksbjwhk0.png"
      ]
    },
    {
      "_id": "ee9b4467-7cf2-45e2-9da0-80c50f30732a",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 170,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/kz6ywnh7jxbey1fwnike.png"
      ]
    },
    {
      "_id": "f183a7c5-bc68-4df1-b011-8feb4173e688",
      "name": "Men Tapered Fit Flat-Front Trousers",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 110,
      "category": "Men",
      "subCategory": "Bottomwear",
      "sizes": [
        "S",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/jcrk7bmxw73sqsyn6q41.png"
      ]
    },
    {
      "_id": "f1c81081-0f69-4519-adb5-7930353e7730",
      "name": "Women Round Neck Cotton Top",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 260,
      "category": "Women",
      "subCategory": "Topwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Bitwyre",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/qzwswsskhnzsxxj4q1jc.png"
      ]
    },
    {
      "_id": "f8c95d00-9acb-49b9-bbe9-81114ade662e",
      "name": "Women Zip-Front Relaxed Fit Jacket",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 270,
      "category": "Women",
      "subCategory": "Winterwear",
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "bestSeller": false,
      "seller":"Others",
      "available": "Out of Stock",
      "video":"",
      "image": [
        "https://res.cloudinary.com/daxxta2o2/image/upload/v1727949542/r8swkod0mqllgv0xf28c.png"
      ]
    }
  ]