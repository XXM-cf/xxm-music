import ajax from '../common/js/ajax.js'
export const loginCellphone = params => ajax.get('/login/cellphone', params).then(res => res) // 登陆
export const userDetail = params => ajax.get('/user/detail', params).then(res => res) // 用户详情
export const UserPlaylist = params => ajax.get('/user/playlist', params).then(res => res) // 用户歌单
export const Search = params => ajax.get('/search', params).then(res => res) // 搜索
export const SearchMultimatch = params => ajax.get('/search/multimatch', params).then(res => res)
