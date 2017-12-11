import ajax from '../common/js/ajax.js'
export const loginCellphone = params => ajax.get('/login/cellphone', params).then(res => res)
export const userDetail = params => ajax.get('/user/detail', params).then(res => res)
export const Search = params => ajax.get('/search', params).then(res => res)
export const SearchMultimatch = params => ajax.get('/search/multimatch', params).then(res => res)
