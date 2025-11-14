
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Star, Clock, MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ImageCompareSlider } from '@/components/ui/image-compare-slider';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import React from 'react';


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
  </svg>
);

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400.141 400.141"
        fill="currentColor"
    >
        <g>
            <path d="M344.879,30.971C327.039,11,302.484,0,275.737,0c-20.946,0-43.379,12.377-59.76,21.414 c-5.425,2.992-13.523,7.894-15.911,7.895c-2.377,0.001-10.438-4.889-15.84-7.879C167.88,12.387,145.494,0,124.401,0 C97.654,0,73.099,11,55.26,30.971C38.308,49.951,28.972,74.93,28.972,101.303c0,16.988,3.122,36.946,8.017,59.606 c4.605,21.32,19.205,39.269,50.061,52.85c9.321,4.104,26.044,7.305,29.044,10.305c3.605,3.605,7.458,16.625,7.458,16.625 s0.875,3.068-0.412,3.068c-7.122,0-12.916,5.795-12.916,12.916s5.794,12.916,12.916,12.916c0,0,6.215,0,8.287,0 c1.625,0,2.154,1.67,2.154,1.67l4.472,13.805c0,0,0.375,2.533-2.6,2.533c-7.121,0-12.914,5.793-12.914,12.914 s5.793,12.916,12.914,12.916c0,0,7.669,0,10.225,0c1.875,0,2.501,1.512,2.501,1.512l5.201,15.561c0,0,0.298,0.936-0.827,0.936 c-1.17,0-4.682,0-4.682,0c-7.123,0-12.916,5.795-12.916,12.916c0,7.123,5.793,12.916,12.916,12.916c0,0,9.668,0,12.891,0 c1.75,0,2.022,1.373,2.022,1.373l7.974,23.855l0.047,0.125c4.757,11.623,14.385,17.52,28.617,17.52h0.791 c14.231,0,23.858-5.896,28.649-17.605c0,0,5.98-18.223,8.19-24.219c0.438-1.189,1.25-1.049,1.25-1.049h13.966 c7.121,0,12.915-5.793,12.915-12.916c0-7.121-3.506-12.916-12.915-12.916c-1.981,0-3.93,0.006-4.778,0.006 c-1.313,0-0.5-2.25-0.5-2.25l4.75-14.313c0,0,0.25-1.449,1.626-1.449c2.829,0,11.318,0,11.318,0 c7.121,0,12.915-5.795,12.915-12.916c0-7.12-5.176-12.913-12.297-12.913c-1.515,0-2.042,0.049-2.625,0.049 c-1.562,0-0.688-1.771-0.688-1.771s3.381-11.144,4.812-15.438c0.313-0.938,1.313-0.85,1.313-0.85h8.882 c7.121,0,12.914-5.795,12.914-12.916s-5.793-12.916-12.914-12.916c-1.132,0-0.92-1.494-0.736-2.234 c1.167-4.709,3.348-14.395,7.5-17.459c3.922-2.895,19.721-6.291,28.842-10.305c30.191-13.291,45.991-33.361,49.961-51.629 c5.019-23.091,8.604-43.98,8.604-60.828C371.168,74.93,361.832,49.954,344.879,30.971z M213.749,376.484 c-2.825,6.844-11.379,7.375-13.932,7.375c-2.548,0-11.065-0.529-13.913-7.324l-6.142-18.416c0,0-0.147-0.854,1.041-0.854 c9.864,0,29.086,0,38.78,0c0.688,0,0.541,0.396,0.541,0.396L213.749,376.484z M228.573,331.434c-14.224,0-42.562,0-56.896,0 c-0.875,0-1.063-0.869-1.063-0.869l-5.535-16.475c0,0-0.09-0.662,1.035-0.662c17.249,0,51.266,0,68.354,0 c0.646,0,0.48,0.477,0.48,0.477l-5.839,17.229C229.112,331.133,228.948,331.434,228.573,331.434z M244.136,286.982 c0,0-0.146,0.615-0.792,0.615c-6.161,0-65.66,0-86.208,0c-0.917,0-1.125-0.574-1.125-0.574l-5.42-16.388 c0,0-0.351-1.071,1.024-1.071c26.875,0,73.109,0.025,97.479,0.025c0.875,0,0.64,0.676,0.64,0.676L244.136,286.982z M256.928,243.753c-28.567,0-113.958-0.063-113.958-0.063s-0.875,0-1.292-0.875c-1.202-2.522-3.542-8.791-4.489-12.369 c-0.525-1.983,1.364-1.381,1.364-1.381c19.971,3.822,39.268,5.351,61.273,5.351c22.32,0,42.439-1.672,62.644-5.601 c0,0,1.417-0.25,1.087,0.653c-1.098,3.009-3.308,9.647-4.316,12.7C258.915,243.148,257.928,243.753,256.928,243.753z M348.261,157.066c-0.691,3.012-2.895,8.507-4.036,11.595c-4.261,11.532-18.773,21.91-38.087,30.414 c-9.916,4.365-21.131,8.088-33.332,11.064l-2.128,0.514c-21.528,5.049-46.028,7.717-70.853,7.717 c-24.134,0-48.009-2.529-69.107-7.318l-2.075-0.477c-12.884-3.041-24.7-6.908-35.129-11.498 c-18.93-8.334-34.325-19.907-38.899-31.041c-1.469-3.577-3.938-12.219-3.938-12.219c-4.931-21.021-5.661-39.273-5.661-54.512 c0-41.91,29.694-85.258,79.384-85.258c12.896,0,29.882,5.902,45.442,15.789c2.272,1.445,5.513,3.936,8.646,6.346 c1.245,0.957,2.473,1.9,3.618,2.764c3.715,2.779,8.735,6.418,14.615,9.879c3.093,1.826,5.907,3.445,9.021,4.768 c12.738,5.406,26.244,8.148,40.142,8.148c14.181,0,31.599-3.445,31.359-5.414c-0.24-1.969-29.273-1.969-48.604-7.09 c-7.717-2.043-16.462-5.355-16.462-7.17c0-1.935,2.729-3.453,4.871-4.732c1.868-1.117,3.987-2.383,6.688-3.873 c14.851-8.193,35.188-19.414,52-19.414c49.69,0,79.384,43.348,79.384,85.258C355.121,116.336,353.147,135.788,348.261,157.066z"></path>
        </g>
    </svg>
);

const PeriodontiaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xmlSpace="preserve">
        <path style={{fill: 'hsl(var(--secondary))'}} d="M256.01,437.556L256.01,437.556h-0.016c-118.606,0-72.186-103.997-255.979-95.997L0,511.992h511.996V341.559C328.187,333.559,374.623,437.556,256.01,437.556z"></path>
        <path style={{fill: 'hsl(var(--primary))'}} d="M469.902,180.875c22-53.171-3.25-114.123-56.436-136.138c-16.031-6.625-32.75-8.968-48.938-7.531 c-10.404-12.438-23.904-22.609-39.936-29.25c-53.178-22.015-114.13,3.25-136.145,56.436c-6.031,14.609-8.516,29.796-7.828,44.609 l3,74.842c-16.14,19.343-59.999,157.339-13.578,176.557c14.609,6.047,88.826-108.403,103.178-102.575 c14.342,5.828-14.102,139.449,0.5,145.48c46.436,19.219,112.902-109.419,115.152-134.512l55.061-50.828 C454.871,207.984,463.871,195.485,469.902,180.875z"></path>
    </svg>
);

const SurgeryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 56.592 56.592"
      xmlSpace="preserve"
    >
      <g>
        <path d="M13.833,5.7c-5.239,1.856-6.765,8.42-5.966,13.733c0.075,0.496,0.501,0.852,0.988,0.852c0.049,0,0.1-0.004,0.149-0.011 c0.547-0.083,0.923-0.592,0.841-1.138C9.164,14.608,10.33,9.062,14.501,7.584c0.521-0.185,0.793-0.756,0.608-1.276 C14.926,5.788,14.357,5.515,13.833,5.7z" />
        <path d="M24.136,16.582c-0.127-0.294-0.248-0.591-0.365-0.891c-0.201-0.516-0.783-0.77-1.295-0.568 c-0.515,0.2-0.769,0.78-0.568,1.295c0.125,0.321,0.256,0.64,0.393,0.957c0.163,0.378,0.531,0.604,0.918,0.604 c0.133,0,0.267-0.026,0.396-0.082C24.121,17.678,24.355,17.09,24.136,16.582z" />
        <path d="M22.638,12.02c-0.071-0.313-0.139-0.629-0.2-0.945c-0.104-0.543-0.632-0.906-1.171-0.792 c-0.543,0.104-0.897,0.629-0.792,1.171c0.065,0.34,0.137,0.677,0.214,1.012c0.105,0.464,0.518,0.777,0.974,0.777 c0.074,0,0.149-0.008,0.224-0.025C22.425,13.094,22.761,12.558,22.638,12.02z" />
        <path d="M21.033,8.304c0.552-0.022,0.980-0.488,0.958-1.04c-0.013-0.32-0.021-0.642-0.024-0.965c-0.005-0.549-0.451-0.991-1-0.991 c-0.003,0-0.006,0-0.009,0c-0.553,0.005-0.996,0.456-0.991,1.009c0.003,0.345,0.012,0.688,0.026,1.029 c0.022,0.538,0.465,0.959,0.998,0.959C21.006,8.305,21.02,8.305,21.033,8.304z" />
        <path d="M25.903,19.998c-0.288-0.473-0.905-0.622-1.374-0.333c-0.472,0.288-0.621,0.903-0.333,1.374 c0.179,0.293,0.362,0.582,0.551,0.87c0.191,0.292,0.511,0.451,0.837,0.451c0.188,0,0.379-0.053,0.548-0.164 c0.462-0.303,0.59-0.923,0.287-1.385C26.242,20.543,26.07,20.272,25.903,19.998z" />
        <path d="M36.978,30.507c-0.283-0.157-0.563-0.318-0.839-0.483c-0.474-0.284-1.089-0.127-1.371,0.348s-0.127,1.088,0.348,1.371 c0.294,0.175,0.591,0.346,0.892,0.513c0.153,0.086,0.32,0.126,0.484,0.126c0.352,0,0.692-0.186,0.875-0.515 C37.635,31.384,37.46,30.775,36.978,30.507z" />
        <path d="M41.371,32.523c-0.303-0.112-0.604-0.229-0.903-0.351c-0.51-0.207-1.094,0.038-1.303,0.551 c-0.208,0.511,0.039,1.095,0.551,1.303c0.316,0.129,0.636,0.252,0.958,0.372c0.115,0.043,0.232,0.063,0.349,0.063 c0.405,0,0.787-0.249,0.938-0.651C42.152,33.291,41.889,32.715,41.371,32.523z" />
        <path d="M46.016,33.864c-0.316-0.066-0.63-0.138-0.942-0.213c-0.535-0.132-1.077,0.199-1.207,0.736 c-0.13,0.536,0.199,1.077,0.736,1.207c0.332,0.081,0.667,0.156,1.005,0.227c0.068,0.015,0.138,0.021,0.205,0.021 c0.464,0,0.879-0.324,0.978-0.796C46.903,34.506,46.557,33.976,46.016,33.864z" />
        <path d="M32.199,27.245c-0.428-0.354-1.057-0.294-1.408,0.129c-0.354,0.425-0.296,1.056,0.129,1.408 c0.264,0.219,0.53,0.434,0.8,0.644c0.183,0.143,0.399,0.212,0.614,0.212c0.298,0,0.593-0.132,0.789-0.385 c0.34-0.436,0.263-1.064-0.173-1.403C32.696,27.652,32.445,27.451,32.199,27.245z" />
        <path d="M28.748,23.879c-0.364-0.417-0.996-0.459-1.411-0.097c-0.416,0.362-0.46,0.994-0.097,1.411 c0.225,0.258,0.454,0.514,0.688,0.765c0.197,0.212,0.464,0.318,0.731,0.318c0.244,0,0.489-0.089,0.682-0.269 c0.404-0.376,0.427-1.009,0.05-1.413C29.173,24.36,28.959,24.121,28.748,23.879z" />
        <path d="M53.916,20.148c0.001-0.014-0.006-0.027-0.006-0.041c0.066-1.362,0.064-2.714-0.015-4.049c0-0.02,0.009-0.036,0.008-0.056 c-0.009-0.146-0.023-0.292-0.034-0.437c-0.004-0.058-0.009-0.116-0.013-0.175c-0.011-0.142-0.02-0.285-0.033-0.426 c-0.002-0.022-0.015-0.039-0.018-0.06c-0.132-1.369-0.353-2.717-0.688-4.034c-0.002-0.009,0.001-0.018-0.001-0.027l-0.047-0.182 c-0.001-0.003-0.001-0.006-0.002-0.009c-0.002-0.006-0.004-0.011-0.006-0.017c-0.077-0.29-0.165-0.575-0.267-0.856 c-0.008-0.021-0.024-0.034-0.033-0.054c-0.469-1.27-1.198-2.506-2.164-3.671c-0.008-0.01-0.009-0.022-0.017-0.032 C50.35,5.747,50.11,5.48,49.861,5.219c-0.004-0.004-0.01-0.006-0.014-0.01c-0.916-0.957-2-1.85-3.22-2.665 c-0.013-0.01-0.02-0.025-0.034-0.034l-0.27-0.177c-0.213-0.138-0.43-0.269-0.651-0.394c-0.009-0.005-0.02-0.005-0.029-0.01 c-1.221-0.686-2.563-1.192-3.982-1.513c-0.007-0.002-0.012-0.007-0.019-0.008c-0.115-0.026-0.234-0.043-0.35-0.066 C41.086,0.3,40.88,0.258,40.67,0.224c-0.028-0.005-0.055-0.011-0.083-0.016c-0.008-0.001-0.015,0.002-0.022,0.001 c-1.368-0.214-2.79-0.264-4.23-0.15c-0.003,0-0.005-0.001-0.007-0.001c-0.03,0.002-0.059,0.007-0.089,0.01 c-0.314,0.027-0.629,0.06-0.944,0.102c-0.007,0.001-0.015,0.001-0.022,0.002c-0.002,0-0.003,0.001-0.004,0.001 c-1.37,0.186-2.746,0.518-4.095,1.004c-0.005,0.002-0.011,0-0.016,0.002C30.86,1.286,30.569,1.4,30.284,1.517l-0.137,0.058 c-0.001,0-0.001,0.001-0.001,0.001l-0.064,0.027c-0.094,0.041-0.186,0.081-0.278,0.113c-0.466,0.162-0.822,0.3-1.113,0.413 c-0.746,0.289-0.902,0.339-1.728,0.115c-0.001,0-0.001-0.001-0.002-0.001c-0.1-0.027-0.208-0.057-0.332-0.092 c-0.018-0.005-0.038-0.011-0.057-0.016c-0.116-0.034-0.241-0.07-0.395-0.116l-0.161-0.047c-0.002,0-0.004,0-0.006,0 c-1.59-0.464-3.329-0.92-5.101-1.237l-0.435-0.086l-0.002,0.013c-2.88-0.475-5.818-0.557-8.31,0.327 c-5.73,2.03-10.809,8.751-9.238,19.189c0.187,1.235,0.367,2.48,0.55,3.732c1.312,9.016,2.668,18.339,6.154,26.757l0.119,0.289 c0.865,2.108,2.314,5.637,4.837,5.637h0.203l0.187-0.079c2.316-0.98,3.181-3.202,3.813-4.824c0.427-1.095,0.807-2.21,1.175-3.289 c0.483-1.418,0.955-2.793,1.516-4.113c1.27,2.585,3.865,6.799,7.292,6.799c0.401,0,0.815-0.059,1.239-0.184 c2.255-0.668,3.385-2.996,4.21-4.695l0.066-0.137c0.173-0.356,0.394-0.769,0.631-1.215c0.239-0.449,0.5-0.948,0.756-1.46 c0.25,0.806,0.468,1.635,0.682,2.457c0.238,0.914,0.485,1.859,0.771,2.741c1.211,3.729,2.784,7.573,5.268,7.828 c1.312,0.135,2.516-0.751,3.588-2.63c1.96-3.434,2.8-7.26,3.612-10.959l0.286-1.294c0.32-1.43,0.676-2.906,1.039-4.415 c0.146-0.606,0.293-1.219,0.44-1.836l0.015-0.063c0,0,0-0.001,0-0.002c0.308-1.292,0.611-2.606,0.899-3.933 c0.001-0.005,0.005-0.01,0.006-0.015l0.145-0.68c0.001-0.006,0.003-0.012,0.004-0.019l0.063-0.293c0.001-0.005-0.001-0.01,0-0.016 c0.274-1.314,0.523-2.638,0.738-3.966c0.002-0.011,0.009-0.019,0.011-0.03c0.035-0.217,0.068-0.434,0.101-0.651 c0.007-0.045,0.014-0.09,0.021-0.134c0.011-0.075,0.024-0.151,0.035-0.226c0.001-0.007-0.002-0.013-0.001-0.02 c0.197-1.342,0.348-2.685,0.446-4.022c0.002-0.015,0.01-0.027,0.011-0.042c0.017-0.227,0.029-0.453,0.043-0.68 c0.001-0.016,0.002-0.032,0.003-0.048C53.903,20.347,53.911,20.247,53.916,20.148z M33.15,43.914 c-0.25,0.471-0.48,0.904-0.664,1.28l-0.066,0.138c-0.7,1.441-1.57,3.234-2.979,3.651c-3.331,0.989-6.391-6.003-6.729-6.804 l-0.088-0.211c0.106-0.189,0.208-0.36,0.309-0.527c0.134-0.216,0.267-0.433,0.412-0.645c1.197-1.752,4.428-5.561,8.556-3.101 c0.321,0.191,0.611,0.409,0.883,0.643c0.101,0.087,0.193,0.188,0.29,0.282c0.156,0.152,0.311,0.305,0.452,0.47 c0.131,0.155,0.256,0.324,0.378,0.496c0.081,0.112,0.162,0.223,0.237,0.339c0.161,0.25,0.315,0.515,0.462,0.8 c0.015,0.029,0.031,0.057,0.045,0.085C34.256,41.835,33.672,42.933,33.15,43.914z M47.928,41.1l-0.288,1.303 c-0.78,3.553-1.587,7.228-3.396,10.396c-0.608,1.065-1.235,1.672-1.647,1.633c-0.458-0.047-1.723-0.771-3.569-6.456 c-0.269-0.826-0.497-1.702-0.738-2.629c-0.789-3.023-1.673-6.398-4.246-8.567c-0.006-0.005-0.013-0.01-0.018-0.015 c-0.338-0.283-0.702-0.548-1.102-0.787c-3.817-2.273-8.122-0.858-11.229,3.69c-0.173,0.253-0.345,0.521-0.52,0.814 c-1.412,2.317-2.273,4.831-3.105,7.272c-0.36,1.059-0.733,2.153-1.145,3.208c-0.64,1.642-1.238,2.961-2.512,3.608 c-1.134-0.283-2.345-3.231-2.814-4.375l-0.121-0.295c-3.392-8.187-4.729-17.385-6.023-26.279c-0.183-1.255-0.364-2.503-0.55-3.741 c-1.01-6.71,1.05-14.57,7.928-17.008c1.119-0.396,2.388-0.557,3.716-0.557c1.226,0,2.502,0.139,3.76,0.352 c0.124,0.331,0.408,0.593,0.783,0.646c0.048,0.007,0.095,0.01,0.142,0.01c0.287,0,0.548-0.129,0.733-0.332 c1.286,0.281,2.515,0.613,3.607,0.933c2.854,1.624,4.444,2.887,5.292,4.208c0.191,0.298,0.514,0.46,0.843,0.46 c0.185,0,0.372-0.051,0.539-0.158c0.465-0.299,0.6-0.917,0.302-1.382c-0.679-1.057-1.652-2.024-3.117-3.066 c0.271-0.104,0.6-0.232,1.03-0.381c0.14-0.049,0.276-0.107,0.416-0.167l0.162-0.07c0,0,0.002,0,0.003,0 c0.006-0.003,0.013-0.005,0.019-0.007c3.055-1.259,6.292-1.641,9.217-1.177c0.001,0,0.002,0.001,0.003,0.001 c0.11,0.017,0.218,0.042,0.328,0.062c1.688,0.307,3.268,0.89,4.633,1.768c3.1,1.993,5.187,4.523,5.883,7.125 c0.004,0.014,0.008,0.026,0.012,0.041c0.384,1.458,0.62,2.966,0.736,4.509c0.002,0.024,0.004,0.048,0.006,0.072 c0.342,4.673-0.404,9.66-1.43,14.506l-0.018,0.084c-0.297,1.396-0.616,2.778-0.939,4.14c-0.375,0.116-0.664,0.444-0.702,0.86 c-0.028,0.311,0.1,0.59,0.307,0.793c-0.041,0.17-0.082,0.341-0.122,0.51C48.608,38.174,48.25,39.661,47.928,41.1z" />
      </g>
    </svg>
);


const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o.';

const specialties = [
  {
    title: 'Periodontia',
    description:
      'Cuidamos da saúde das suas gengivas e das estruturas que sustentam seus dentes, prevenindo e tratando doenças como gengivite e periodontite.',
    icon: PeriodontiaIcon,
  },
  {
    title: 'Cirurgia Oral e Periodontal',
    description:
      'Procedimentos cirúrgicos com precisão e segurança, incluindo enxertos, cirurgias gengivais estéticas e extrações complexas.',
    icon: SurgeryIcon,
  },
  {
    title: 'Implantes',
    description:
      'A solução definitiva para a perda de dentes. Devolvemos a função e a estética do seu sorriso com implantes dentários de titânio.',
    icon: ToothIcon,
  },
];

const testimonials = [
  {
    quote:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fui muito bem atendida, e o resultado foi além das minhas expectativas. Recomendo!"',
    author: 'Paciente Satisfeita',
  },
  {
    quote:
      '"A Dra. Tayná é uma profissional incrível. Tinha muito medo de dentista, mas ela e sua equipe me passaram total segurança. Obrigado!"',
    author: 'Paciente Satisfeito',
  },
  {
    quote:
      '"Desde a recepção até o tratamento, tudo perfeito. Clínica moderna e atendimento humanizado. Consegui meu implante sem dor."',
    author: 'Paciente Satisfeita',
  },
];

const navLinks = [
    { href: "#especialidades", label: "Especialidades" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#localizacao", label: "Localização" },
]

const beforeAfterCases = [
    { id: 'case-1', before: PlaceHolderImages.find(img => img.id === 'antes-1'), after: PlaceHolderImages.find(img => img.id === 'depois-1') },
    { id: 'case-2', before: PlaceHolderImages.find(img => img.id === 'antes-2'), after: PlaceHolderImages.find(img => img.id === 'depois-2') },
    { id: 'case-3', before: PlaceHolderImages.find(img => img.id === 'antes-3'), after: PlaceHolderImages.find(img => img.id === 'depois-3') },
    { id: 'case-4', before: PlaceHolderImages.find(img => img.id === 'antes-4'), after: PlaceHolderImages.find(img => img.id === 'depois-4') },
]

export default function Home() {
  const openWhatsapp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const heroBannerDesktop = PlaceHolderImages.find(p => p.id === 'hero-banner-desktop');
  const heroBannerMobile = PlaceHolderImages.find(p => p.id === 'hero-banner-mobile');

  return (
    <div className="bg-background font-sans text-foreground antialiased">
      <header className="bg-white/10 backdrop-blur-lg shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-secondary font-serif">
            Dra. Tayná Magalhães
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                    {link.label}
                 </Link>
            ))}
          </div>
          
          <Button
            onClick={openWhatsapp}
            variant="custom"
            className="hidden md:flex custom-btn px-6 py-2 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Agende sua Avaliação
          </Button>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <Link href="/" className="text-2xl font-bold text-secondary font-serif mb-8">
                    Dra. Tayná Magalhães
                  </Link>
                </SheetHeader>
                <div className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href} className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </SheetClose>
                   ))}
                </div>
                 <Button
                    onClick={openWhatsapp}
                    variant="custom"
                    className="mt-8 w-full custom-btn px-8 py-3 h-auto rounded-full font-bold text-lg shadow-xl transition-transform duration-300 hover:scale-105"
                  >
                    Agendar autoavaliação
                  </Button>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-0">
                {heroBannerDesktop && (
                    <Image
                    src={heroBannerDesktop.imageUrl}
                    alt={heroBannerDesktop.description}
                    fill
                    className="object-cover w-full h-full hidden md:block"
                    data-ai-hint={heroBannerDesktop.imageHint}
                    priority
                    />
                )}
                {heroBannerMobile && (
                    <Image
                    src={heroBannerMobile.imageUrl}
                    alt={heroBannerMobile.description}
                    fill
                    className="object-cover w-full h-full md:hidden"
                    data-ai-hint={heroBannerMobile.imageHint}
                    priority
                    />
                )}
            </div>
            <div className="relative z-10 w-full container mx-auto px-6 flex flex-col items-center text-center md:items-start md:text-left mt-auto pb-24 md:pb-0 md:mt-0 md:static md:flex-grow md:justify-center">
              <div className="max-w-xl">
                <AnimateOnScroll>
                    <h1 className="text-gradient text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
                      Recupere sua <em>autoestima</em> com o Sorriso dos Sonhos!
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                    <p
                      className="text-lg mb-8"
                      style={{ color: '#553d30' }}
                    >
                      Oferecemos <strong>tratamentos periodontais</strong> e de <strong>implantes</strong> com a mais <strong>alta tecnologia</strong>, focados na sua <strong>saúde e bem-estar</strong>.
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.4}>
                  <div className="flex justify-center">
                    <Button
                      onClick={openWhatsapp}
                      variant="custom"
                      className="custom-btn px-6 py-2 md:px-8 md:py-3 h-auto rounded-full font-bold text-base md:text-lg shadow-xl pulse-button transition-transform duration-300 hover:scale-105"
                    >
                      Agendar autoavaliação
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Estética Odontológica Personalizada
                </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
                Nossas especialidades são focadas em devolver a função e a estética do seu sorriso.
                </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((spec, index) => (
                <AnimateOnScroll key={spec.title} delay={index * 0.2}>
                    <Card
                    className="bg-card rounded-2xl shadow-lg text-center border-t-4 border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        <div className="p-8 flex flex-col items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <spec.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-secondary mb-3">
                            {spec.title}
                        </h3>
                        <p className="text-muted-foreground">{spec.description}</p>
                        </div>
                    </Card>
                </AnimateOnScroll>
              ))}
            </div>
             <AnimateOnScroll delay={0.3}>
              <Button
                onClick={openWhatsapp}
                variant="custom"
                className="custom-btn mt-16 inline-block px-8 py-3 h-auto rounded-full font-bold text-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Quero agendar minha avaliação
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
        
        {/* Antes e Depois */}
        <section className="bg-card py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col items-center gap-12">
                <div className="w-full text-center">
                    <AnimateOnScroll>
                        <p className="font-serif text-primary text-lg">Resultados Reais</p>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8">
                            Resultados que transformam sorrisos
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {beforeAfterCases.map((caseItem, index) => (
                        caseItem.before && caseItem.after && (
                          <AnimateOnScroll key={caseItem.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                            <ImageCompareSlider
                                before={caseItem.before.imageUrl}
                                after={caseItem.after.imageUrl}
                                alt={`Comparativo do ${caseItem.id}`}
                                beforeHint={caseItem.before.imageHint}
                                afterHint={caseItem.after.imageHint}
                            />
                          </AnimateOnScroll>
                        )
                    ))}
                </div>
                <div className="w-full text-center">
                     <AnimateOnScroll>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Veja um exemplo do nosso trabalho dedicado. Cada paciente recebe
                        um plano de tratamento personalizado para alcançar o melhor
                        resultado possível, unindo saúde e estética.
                        </p>
                        <Button
                            onClick={openWhatsapp}
                            variant="custom"
                            className="custom-btn px-8 py-3 h-auto rounded-full font-bold text-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            Eu também quero transformar meu sorriso
                        </Button>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>


        {/* Sobre a Doutora */}
        <section id="sobre" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <AnimateOnScroll className="md:w-1/3 relative w-full max-w-sm" direction="left">
                 <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-2xl transform -rotate-3"></div>
                <Image
                    src={PlaceHolderImages.find(p => p.id === 'dra-tayn-retrato')?.imageUrl || ''}
                    alt="Retrato da Dra. Tayná Magalhães"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10"
                    data-ai-hint={PlaceHolderImages.find(p => p.id === 'dra-tayn-retrato')?.imageHint || ''}
                />
            </AnimateOnScroll>
            <div className="md:w-2/3">
              <AnimateOnScroll direction="right">
                <p className="font-serif text-primary text-lg">Conheça a especialista</p>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                    Dra. Tayná Magalhães
                </h2>
                <p className="text-lg font-semibold text-secondary mb-2">
                    Esp. em Periodontia | Cirurgia Oral e Periodontal | Implantes
                </p>
                <p className="text-md font-semibold text-gray-700 mb-6">
                    CRO-BA 25109
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2} direction="right">
                <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-muted-foreground">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
                <p className="font-serif text-4xl text-primary/70 mt-6">
                    Tayná Magalhães
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
                <p className="font-serif text-primary text-lg">Depoimentos</p>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-16">
                O que nossos pacientes dizem!
                </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index} delay={index * 0.2}>
                    <Card
                    className="bg-background p-8 rounded-2xl shadow-lg text-left"
                    >
                    <CardHeader className="p-0 mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20}/>)}
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4 italic">{testimonial.quote}</p>
                        <p className="font-bold text-secondary">
                        - {testimonial.author}
                        </p>
                    </CardContent>
                    </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* Localização */}
        <section id="localizacao" className="py-20 md:py-28 text-center bg-background">
            <div className="container mx-auto px-6">
                <AnimateOnScroll>
                    <p className="font-serif text-primary text-lg">Onde estamos</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12">
                        Venha Conhecer Nossa Clínica!
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll>
                    <div className="w-full h-96 rounded-2xl shadow-xl overflow-hidden mb-8">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.971339180709!2d-38.45934308889953!3d-12.97371199079374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b204e8b0001%3A0x8f2d5c3695d52044!2sCEO%20Salvador%20Shopping!5e0!3m2!1sen!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-downgrade"
                        ></iframe>
                    </div>
                </AnimateOnScroll>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                    <AnimateOnScroll direction="left">
                        <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                            <MapPin className="text-primary mt-1" size={24}/>
                            <div>
                                <h3 className="font-bold text-lg text-foreground">Endereço</h3>
                                <p className="text-muted-foreground">
                                    Av. Tancredo Neves, 2539 - Caminho das Árvores, Salvador - BA,
                                    41820-021
                                </p>
                                <a
                                    href="https://www.google.com/maps/place/CEO+Salvador+Shopping/@-12.973712,-38.4593431,17z/data=!3m1!4b1!4m6!3m5!1s0x7161b204e8b0001:0x8f2d5c3695d52044!8m2!3d-12.973712!4d-38.4567682!16s%2Fg%2F11b6xl_j_2?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-primary font-semibold mt-2 hover:underline"
                                >
                                    Ver no Google Maps
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>
                     <AnimateOnScroll delay={0.2} direction="right">
                        <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                            <Clock className="text-primary mt-1" size={24}/>
                            <div>
                                <h3 className="font-bold text-lg text-foreground">Horário de Funcionamento</h3>
                                <p className="text-muted-foreground">
                                    Segunda a Sexta: 08:00 - 18:00<br/>
                                    Sábado: 08:00 - 12:00
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-gradient-to-r from-[#E0A45E] to-[#AE5E55] text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
            <AnimateOnScroll>
                 <Link href="/" className="text-3xl font-bold text-white font-serif mb-4 inline-block">
                    Dra. Tayná Magalhães
                </Link>
                <p className="text-gray-200">
                    Recupere sua autoestima com o sorriso dos seus sonhos.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
                <h4 className="font-bold text-lg mb-4 text-white">Navegação</h4>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-gray-200 hover:text-white transition-colors">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
                <h4 className="font-bold text-lg mb-4 text-white">Redes Sociais</h4>
                 <div className="flex justify-center md:justify-start gap-6 mb-6">
                    <a
                    href="https://www.instagram.com/doutora.tayna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition duration-300"
                    aria-label="Instagram"
                    >
                    <Instagram />
                    </a>
                    <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition duration-300"
                    aria-label="WhatsApp"
                    >
                    <WhatsAppIcon className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-gray-200 text-sm">CRO-BA 25109</p>
            </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
            <div className="container mx-auto px-6 mt-10 border-t border-gray-400 pt-8 text-center text-gray-200 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Dra. Tayná Magalhães. Todos os
                    direitos reservados.
                </p>
            </div>
        </AnimateOnScroll>
      </footer>
    </div>
  );
}

    
