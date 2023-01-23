// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDispatcherType = any;

export interface IError {
	name: string;
	message: string;
	code: string;
	stack: string;
	data?: unknown;
}

export interface IAPIResponse<T> {
	status: boolean;
	data: T;
	success: boolean;
	response?: string;
	statusText?: string;
}
export interface IInitialState {
	loading: boolean;
	error: string;
	data: unknown;
	isFetched: boolean;
}

export interface IGetParams {
	[field: string]: any;
}

export const INITIAL_STATE = (): IInitialState => ({
	loading: false,
	error: '',
	data: {},
	isFetched: false,
});
export interface ISampleResponse {
	message: string;
}
export interface URLParametersType {
	string: string | number;
}
interface IACTION<T = unknown> {
	type: string | symbol;
	payload: T;
}
export interface IAPI_ACTION<T = unknown> extends IACTION<T> {
	meta: unknown;
	error: {
		name: string;
		message: string;
		stack: string;
	};
}

//Common Types
export interface MerchantInfoObj {
	acno: string;
	bank_name: string;
	beneficiaryName: string;
	businessCategoryEditable: boolean;
	businessNameEditable: boolean;
	businessSubCategoryEditable: boolean;
	businesscategory: string;
	businessemail: string;
	businessname: string;
	earmoney: number;
	fos_address: string;
	fos_city: string;
	fos_onboard: boolean;
	fos_pincode: string;
	fos_shopno: string;
	fos_state: string;
	gstn: string;
	hard_update: boolean;
	ifsc: string;
	ifsc_logo: string;
	ifscbranch: string;
	isOrganized: boolean;
	isTTSEnabled: boolean;
	link_code: string;
	linked: number;
	localization: string;
	merchantType: string;
	merchantaddress: string;
	merchantname: string;
	mid: string;
	mobile: string;
	othercategory: string;
	phonebook_flag: string;
	qrstring: string;
	settlement: string;
	settlement_button: string;
	settlement_text: string;
	soft_update: boolean;
	subcategory: string;
	supportno: string;
	vpa: string;
	wtAlert: boolean;
}

export interface WidgetObject {
	cards: Array<CardProps>;
	position: number;
	title: string;
	type: string;
}

export interface CardProps {
	cta: string | null;
	ctaText: string | null;
	elements: Array<WidgetsElementType> | [];
	media: string | null;
	mediaType: string | null;
	position?: number;
	text: string | null;
	title: string | null;
}

export interface WidgetsElementType {
	element_cta: string | null;
	element_icon: string | null;
	element_text: string | null;
}

export interface HeadingPropsObj {
	className?: string;
	heading: string;
	showViewAll?: boolean;
	viewAllClick?: () => void;
}
