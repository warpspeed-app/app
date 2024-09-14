import wretch from 'wretch'

import QueryStringAddon from "wretch/addons/queryString"
import FormDataAddon from "wretch/addons/formData"
import FormUrlAddon from "wretch/addons/formUrl"
import { dedupe } from 'wretch/middlewares'

export const imdb = wretch('https://imdb.io')
    .addon(QueryStringAddon)
    .addon(FormDataAddon)
    .addon(FormUrlAddon)
    .middlewares([dedupe()])
