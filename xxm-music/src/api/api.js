import ajax from '../common/js/ajax.js'
export const loginCellphone = params => ajax.get('/api/login/cellphone', params).then(res => res) // 登陆

export const userDetail = params => ajax.get('/api/user/detail', params).then(res => res) // 用户详情
export const UserPlaylist = params => ajax.get('/api/user/playlist', params).then(res => res) // 用户歌单
export const UserSubcounth = params => ajax.get('/api/user/subcount', params).then(res => res) // 获取用户信息,歌单，收藏，mv, dj 数量

export const Search = params => ajax.get('/api/search', params).then(res => res) // 搜索
export const SearchMultimatch = params => ajax.get('/api/search/multimatch', params).then(res => res)


export const Banner = params => ajax.get('/api/banner', params).then(res => res)
export const personalized = params => ajax.get('/api/personalized', params).then(res => res) // 推荐歌单


