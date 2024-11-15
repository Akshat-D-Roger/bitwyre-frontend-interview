import {atom} from 'recoil'

const preloadVidsAtom = atom<string[]>({
    key:'preloadVidsAtom',
    default:['https://res.cloudinary.com/daxxta2o2/video/upload/v1731660490/Videos/swugjdd05hqido5de8db.mp4', 
        'https://res.cloudinary.com/daxxta2o2/video/upload/v1731619178/Videos/nfk7eetjd6xpm1l5fnyr.mp4'
    ]
})

export {preloadVidsAtom};