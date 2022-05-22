// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// a


module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#FC5A34",
					secondary: "#E81938",
					accent: "#3A4256",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
      "dracula",
		],
	},
}