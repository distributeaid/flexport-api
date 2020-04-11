import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'
import { Type } from './types'

export type Railport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/ocean/railport` for this object.
	 */
	_object: Type.Railport

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string
}

export const toRailport = (o: ApiObject) => passThrough<Railport>(o as Railport)
