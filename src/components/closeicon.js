export default function CloseIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="21"
			height="20"
			viewBox="0 0 21 20"
			{...props}
		>
			<rect
				x="1.29041"
				width="26.4595"
				height="1.82479"
				transform="rotate(45 1.29041 0)"
				fill={props.fill}
			/>
			<rect
				x="0.341309"
				y="18.7097"
				width="26.4595"
				height="1.82479"
				transform="rotate(-45 0.341309 18.7097)"
				fill={props.fill}
			/>
		</svg>
	)
}
