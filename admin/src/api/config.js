//这是api的配置文件
export const SERVER = process.env.NODE_ENV == 'production' ? 'http://api.sortmall.com' : ''
export const VERSION = 'v1'

export const CATEGORY_ICON_UPLOAD = SERVER + '/' + VERSION + '/categories/icons'
export const PRODUCT_IMAGE_UPLOAD = SERVER + '/' + VERSION + '/products/images'
export const PRODUCT_DETAIL_IMAGES_UPLOAD = SERVER + '/' + VERSION + '/products/detailImages'
export const AD_IMAGE_UPLOAD = SERVER + '/' + VERSION + '/ads/image'

export const API_CONFIG = {
    //方法名称:     [请求地址,请求方法]
    getCaptcha: ['/users/captcha', 'get'],
    login: ['/users/login', 'post'],
    getCounts: ['/counts', 'get'],
    logout: ['/users/logout', 'get'],
    getUserList: ['/users/list', 'get'],
    updateUsersIsActive: ['/users/isActive', 'put'],
    addCategory: ['/categories', 'post'],
    getLevelCategories: ['/categories/levelCategories', 'get'],
    getCategoryList: ['/categories/list', 'get'],
    updateCategoriesName: ['/categories/name', 'put'],
    updateCategoriesMobileName: ['/categories/mobileName', 'put'],
    updateCategoriesIsShow: ['/categories/isShow', 'put'],
    updateCategoriesIsFloor: ['/categories/isFloor', 'put'],
    updateCategoriesOrder: ['/categories/order', 'put'],
    getCategoriesDetail: ['/categories/detail', 'get'],
    updateCategory: ['/categories', 'put'],
    addAttr: ['/attrs', 'post'],
    updateAttr: ['/attrs', 'put'],
    getAttrList: ['/attrs/list', 'get'],
    updateAttrsOrder: ['/attrs/order', 'put'],
    getAttrsDetail: ['/attrs/detail', 'get'],
    getAllAttrs: ['/attrs/allAttrs', 'get'],

    addProduct: ['/products', 'post'],
    updateProduct: ['/products', 'put'],
    getProductList: ['/products/list', 'get'],
    updateProductsIsShow: ['/products/isShow', 'put'],
    updateProductsStatus: ['/products/status', 'put'],
    updateProductsIsHot: ['/products/isHot', 'put'],
    updateProductsOrder: ['/products/order', 'put'],
    getProductsDetail: ['/products/detail', 'get'],

    addAd: ['/ads', 'post'],
    updateAd: ['/ads', 'put'],
    getAdList: ['/ads/list', 'get'],
    updateAdsIsShow: ['/ads/isShow', 'put'],
    updateAdsOrder: ['/ads/order', 'put'],
    getAdsDetail: ['/ads/detail', 'get'],

    updateUsersPwd: ['/users/pwd', 'put'],
}