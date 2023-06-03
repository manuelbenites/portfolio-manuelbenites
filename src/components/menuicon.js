export default function MenuIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="20"
			viewBox="0 0 28 20"
			{...props}
		>
			<rect y="9" width="28" height="2" fill={props.fill} />
			<rect width="20" height="2" fill={props.fill} />
			<rect x="8" y="18" width="20" height="2" fill={props.fill} />
		</svg>
	)
}
