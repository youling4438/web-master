import { type IconProps } from '~/assets'

export function FacebookIcon(props: IconProps = {}) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
      width="1em"
      height="1em" 
      viewBox="0 0 512 512"
      {...props}
    >
      <title>facebook</title>
      <g id="icomoon-facebook"></g>
      <path
        d="M304 96h80v-96h-80c-61.757 0-112 50.243-112 112v48h-64v96h64v256h96v-256h80l16-96h-96v-48c0-8.673 7.327-16 16-16z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
