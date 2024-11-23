import React, { useState, useEffect, useMemo } from 'react';
import { Search, Close, Filter, Download, UserPlus, Bell, Home, Package, MessageSquare, PieChart, Settings, Users, Ticket, Receipt, ArrowUpRight, Plus } from 'lucide-react';
import { Card } from '../components/ui/card.tsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/sidebar.tsx';
import InviteCustomerForm from '../components/InviteCustomerForm.tsx';
import FilterDropdown from '../components/FilterDropdown.tsx';

// Stat Card Component
const CategorySVGs = {
  Overall: {
    Blob: () => (
      <svg
        className="absolute bottom-[-9px] right-0 opacity-90"
        width="165"
        height="154"
        viewBox="0 0 165 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Define a blur filter */}
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M117.51 33.6856C147.858 31.396 177.826 -15.1565 200.552 5.08748C222.775 24.8839 180.579 58.4334 178.631 88.1321C176.959 113.636 205.34 140.269 190.33 160.955C175.329 181.628 142.977 170.418 117.51 172.368C88.178 174.613 56.4967 190.209 32.6185 173.026C7.08423 154.652 -2.25671 119.474 0.450522 88.1321C2.97783 58.873 19.4902 29.1235 46.1181 16.7383C69.1727 6.01516 92.1556 35.5983 117.51 33.6856Z"
          fill="#D2F4D6"
          filter="url(#blurFilter)"
        />
      </svg>
    ),

    Graph: () => (
      <svg className="absolute bottom-0 left-0 w-full opacity-80" height="42" viewBox="0 0 138 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 37L14.6003 29.103C15.6195 28.5113 16.9267 28.9245 17.4205 29.9945L20.2159 36.0511C20.9962 37.7417 23.4605 37.5423 23.9588 35.7482L25.7469 29.3111C26.2752 27.4092 28.9471 27.3413 29.5713 29.2139L30.8283 32.9849C30.9407 33.3222 31.1411 33.6234 31.4086 33.8576L33.7579 35.9132C34.479 36.5442 35.5464 36.575 36.3028 35.9867L39.2265 33.7127C39.4075 33.5719 39.5629 33.4011 39.686 33.2077L41.5156 30.3326C42.247 29.1834 43.8882 29.0856 44.7508 30.1399L47.2967 33.2515C47.4314 33.4161 47.5914 33.5582 47.7709 33.6724L53 37L59.5389 40.7365C59.841 40.9092 60.1831 41 60.5311 41H65.0925C65.6692 41 66.2178 40.751 66.5976 40.317L68.3449 38.3201C69.0059 37.5647 70.1243 37.4162 70.9595 37.973L74.0405 40.027C74.8757 40.5838 75.9941 40.4353 76.6551 39.6799L78.741 37.296C78.912 37.1005 79.1195 36.9403 79.3518 36.8241L85.5045 33.7477C85.8287 33.5856 86.1028 33.3385 86.2974 33.0326L87.9563 30.4258C88.6753 29.2959 90.3247 29.2959 91.0437 30.4258V30.4258C91.8516 31.6954 93.7615 31.5011 94.2972 30.0948L95.6566 26.5264C96.2279 25.0268 98.2438 24.7768 99.164 26.0915L100.5 28L103.249 31.3601C104.112 32.4144 105.753 32.3166 106.484 31.1674L108.5 28L111.9 23.7506C112.279 23.2762 112.854 23 113.461 23H117.585C118.166 23 118.718 22.7471 119.098 22.3072L137.5 1" stroke="#364A15" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    )
  },
  Consumers: {
    Blob: () => (
      <svg
        className="absolute top-0 right-0 opacity-90"
        width="115"
        height="167"
        viewBox="0 0 80 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Define a blur filter */}
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.809 -12.9943C91.0195 -12.531 101.164 17.4337 116.322 36.3181C128.857 51.936 143.244 66.0132 146.129 85.8307C149.505 109.022 149.94 135.82 133.193 152.214C116.519 168.535 89.6679 168.149 66.809 163.474C48.0147 159.631 35.4549 144.235 22.966 129.674C11.8229 116.682 1.57649 102.893 0.215401 85.8307C-1.26236 67.3061 4.97985 49.7974 15.3647 34.3863C28.9079 14.2882 42.5781 -13.4579 66.809 -12.9943Z"
          fill="#FC8019"
          fillOpacity="0.2"
          filter="url(#blurFilter)"
        />
      </svg>
    ),

    Graph: () => (
      <svg className="absolute bottom-0 left-0 w-full opacity-30" height="33" viewBox="0 0 136 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 28L14.6003 20.103C15.6195 19.5113 16.9267 19.9245 17.4205 20.9945L20.2159 27.0511C20.9962 28.7417 23.4605 28.5423 23.9588 26.7482L25.7469 20.3111C26.2752 18.4092 28.9471 18.3413 29.5713 20.2139L30.8283 23.9849C30.9407 24.3222 31.1411 24.6234 31.4086 24.8576L33.7579 26.9132C34.479 27.5442 35.5464 27.575 36.3028 26.9867L39.2265 24.7127C39.4075 24.5719 39.5629 24.4011 39.686 24.2077L41.5156 21.3326C42.247 20.1834 43.8882 20.0856 44.7508 21.1399L47.2967 24.2515C47.4314 24.4161 47.5914 24.5582 47.7709 24.6724L53 28L59.5389 31.7365C59.841 31.9092 60.1831 32 60.5311 32H65.0925C65.6692 32 66.2178 31.751 66.5976 31.317L68.3449 29.3201C69.0059 28.5647 70.1243 28.4162 70.9595 28.973L74.0405 31.027C74.8757 31.5838 75.9941 31.4353 76.6551 30.6799L78.741 28.296C78.912 28.1005 79.1195 27.9403 79.3518 27.8241L85.5045 24.7477C85.8287 24.5856 86.1028 24.3385 86.2974 24.0326L87.9563 21.4258C88.6753 20.2959 90.3247 20.2959 91.0437 21.4258V21.4258C91.8516 22.6954 93.7615 22.5011 94.2972 21.0948L95.6566 17.5264C96.2279 16.0268 98.2438 15.7768 99.164 17.0915L100.5 19L103.249 22.3601C104.112 23.4144 105.753 23.3166 106.484 22.1674L108.5 19L111.9 14.7506C112.279 14.2762 112.854 14 113.461 14H118.5H129.076C129.928 14 130.687 13.4597 130.966 12.6542L135 1" stroke="#364A15" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    )
  },
  'Shop Owners': {
    Blob: () => (
      <svg
        className="absolute top-0 left-[-20px] opacity-90"
        width="147"
        height="126"
        viewBox="0 0 147 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Define a blur filter */}
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M129.28 21.2758C143.306 38.8702 154.779 69.6873 138.781 85.5097C121.619 102.484 92.1717 72.8977 69.2963 80.6022C47.7401 87.8623 43.6238 128.218 21.0857 125.149C0.184079 122.304 -4.2279 91.465 -5.5521 70.4121C-6.58021 54.0665 7.66687 42.4959 14.9647 27.8338C21.8987 13.9028 20.7884 -7.06684 35.5149 -12.0955C50.2299 -17.1202 61.5 1.72753 76.1492 6.94123C94.1146 13.3352 117.393 6.3646 129.28 21.2758Z"
          fill="#1AC84B"
          fillOpacity="0.15"
          filter="url(#blurFilter)"
        />
      </svg>
    ),

    Graph: () => (
      <svg className="absolute bottom-0 left-0 w-full opacity-30" height="32" viewBox="0 0 146 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 19L14.6003 26.897C15.6195 27.4887 16.9267 27.0755 17.4205 26.0055L20.2159 19.9489C20.9962 18.2583 23.4605 18.4577 23.9588 20.2518L25.7469 26.6889C26.2752 28.5908 28.9471 28.6587 29.5713 26.7861L30.8283 23.0151C30.9407 22.6778 31.1411 22.3766 31.4086 22.1424L33.7579 20.0868C34.479 19.4558 35.5464 19.425 36.3028 20.0133L39.2265 22.2873C39.4075 22.4281 39.5629 22.5989 39.686 22.7923L41.5156 25.6674C42.247 26.8166 43.8882 26.9144 44.7508 25.8601L47.2967 22.7485C47.4314 22.5839 47.5914 22.4418 47.7709 22.3276L53 19L59.5389 15.2635C59.841 15.0908 60.1831 15 60.5311 15H65.0925C65.6692 15 66.2178 15.249 66.5976 15.683L68.3449 17.6799C69.0059 18.4353 70.1243 18.5838 70.9595 18.027L74.0405 15.973C74.8757 15.4162 75.9941 15.5647 76.6551 16.3201L78.741 18.704C78.912 18.8995 79.1195 19.0597 79.3518 19.1759L85.5045 22.2523C85.8287 22.4144 86.1028 22.6615 86.2974 22.9674L87.9563 25.5742C88.6753 26.7041 90.3247 26.7041 91.0437 25.5742V25.5742C91.8516 24.3046 93.7615 24.4989 94.2972 25.9052L95.6566 29.4736C96.2279 30.9732 98.2438 31.2232 99.164 29.9085L100.5 28L103.249 24.6399C104.112 23.5856 105.753 23.6834 106.484 24.8326L107.493 26.4172C108.059 27.3072 109.22 27.6043 110.144 27.0959L115.536 24.1301C116.869 23.397 118.5 24.3613 118.5 25.8825V27.6124C118.5 29.4669 120.805 30.3228 122.016 28.9174L134 15L145 1" stroke="#364A15" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    )
  },
  Delivery: {
    Blob: () => (
      <svg
        className="absolute top-[-7px] right-0 opacity-90"
        width="144"
        height="141"
        viewBox="0 0 140 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Define a blur filter */}
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.4771 10.0364C101.671 10.8857 119.549 -10.8357 134.871 -0.986502C150.216 8.87804 149.134 32.3897 146.278 50.4071C143.826 65.8737 129.759 74.888 120.805 87.7354C107.997 106.114 105.872 139.948 83.4771 140.518C61.2239 141.084 59.2534 106.083 44.2002 89.684C30.4773 74.7342 4.34121 70.3821 0.761793 50.4071C-3.043 29.1744 7.66542 3.44203 27.0507 -6.0193C45.32 -14.936 63.1701 9.08852 83.4771 10.0364Z"
          fill="#ECC4B7"
          filter="url(#blurFilter)"
        />
      </svg>
    ),

    Graph: () => (
      <svg className="absolute bottom-0 left-0 w-full opacity-30" height="33" viewBox="0 0 136 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 28L14.6003 20.103C15.6195 19.5113 16.9267 19.9245 17.4205 20.9945L20.2159 27.0511C20.9962 28.7417 23.4605 28.5423 23.9588 26.7482L25.7469 20.3111C26.2752 18.4092 28.9471 18.3413 29.5713 20.2139L30.8283 23.9849C30.9407 24.3222 31.1411 24.6234 31.4086 24.8576L33.7579 26.9132C34.479 27.5442 35.5464 27.575 36.3028 26.9867L39.2265 24.7127C39.4075 24.5719 39.5629 24.4011 39.686 24.2077L41.5156 21.3326C42.247 20.1834 43.8882 20.0856 44.7508 21.1399L47.2967 24.2515C47.4314 24.4161 47.5914 24.5582 47.7709 24.6724L53 28L59.5389 31.7365C59.841 31.9092 60.1831 32 60.5311 32H65.0925C65.6692 32 66.2178 31.751 66.5976 31.317L68.3449 29.3201C69.0059 28.5647 70.1243 28.4162 70.9595 28.973L74.0405 31.027C74.8757 31.5838 75.9941 31.4353 76.6551 30.6799L78.741 28.296C78.912 28.1005 79.1195 27.9403 79.3518 27.8241L85.5045 24.7477C85.8287 24.5856 86.1028 24.3385 86.2974 24.0326L87.9563 21.4258C88.6753 20.2959 90.3247 20.2959 91.0437 21.4258V21.4258C91.8516 22.6954 93.7615 22.5011 94.2972 21.0948L95.6566 17.5264C96.2279 16.0268 98.2438 15.7768 99.164 17.0915L100.5 19L103.249 22.3601C104.112 23.4144 105.753 23.3166 106.484 22.1674L108.5 19L111.9 14.7506C112.279 14.2762 112.854 14 113.461 14H118.5H129.076C129.928 14 130.687 13.4597 130.966 12.6542L135 1" stroke="#364A15" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    )
  }
};

const VerifiedIcon = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.251465" y="0.411133" width="36.3742" height="36.3742" rx="18.1871" fill="#D2F4D6" />
    <rect x="0.615207" y="0.774875" width="35.6467" height="35.6467" rx="17.8234" stroke="black" stroke-opacity="0.1" stroke-width="0.727484" />
    <path d="M15.2852 19.0001L17.0927 20.8151L20.7152 17.1851" stroke="#364A15" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.1802 14.6501C12.1802 13.8551 12.8327 13.2026 13.6277 13.2026H14.9252C15.2252 13.2026 15.6452 13.0451 15.8702 12.8576L17.0552 11.8451C17.5802 11.4026 18.4277 11.4026 18.9377 11.8451L20.1227 12.8576C20.3477 13.0451 20.7752 13.2026 21.0752 13.2026H22.3502C23.1452 13.2026 23.7977 13.8551 23.7977 14.6501V15.9251C23.7977 16.2251 23.9552 16.6451 24.1427 16.8701L25.1552 18.0551C25.5977 18.5801 25.5977 19.4276 25.1552 19.9376L24.1427 21.1226C23.9552 21.3476 23.7977 21.7676 23.7977 22.0676V23.3426C23.7977 24.1376 23.1452 24.7901 22.3502 24.7901H21.0752C20.7752 24.7901 20.3552 24.9476 20.1302 25.1351L18.9452 26.1476C18.4202 26.5901 17.5727 26.5901 17.0627 26.1476L15.8777 25.1351C15.6527 24.9476 15.2252 24.7901 14.9327 24.7901H13.6277C12.8327 24.7901 12.1802 24.1376 12.1802 23.3426V22.0601C12.1802 21.7676 12.0302 21.3401 11.8427 21.1226L10.8302 19.9301C10.3952 19.4126 10.3952 18.5726 10.8302 18.0551L11.2502 17.5601" stroke="#364A15" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const EditIcon = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.625488" y="0.411133" width="36.3742" height="36.3742" rx="18.1871" fill="#2F2F2F" />
    <rect x="0.98923" y="0.774875" width="35.6467" height="35.6467" rx="17.8234" stroke="black" stroke-opacity="0.1" stroke-width="0.727484" />
    <path d="M24.8747 19.2041V20.4166C24.8747 23.4478 23.6623 24.6602 20.6311 24.6602H16.9937C13.9625 24.6602 12.75 23.4478 12.75 20.4166V19.4951" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.2061 12.5356H16.9937C13.9625 12.5356 12.75 13.7481 12.75 16.7793" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M23.62 16.7853L24.2565 16.1488C25.081 15.3243 25.469 14.3664 24.2565 13.154C23.0441 11.9415 22.0862 12.3295 21.2617 13.154L16.4846 17.9311C16.3027 18.113 16.1209 18.4707 16.0845 18.7313L15.8238 20.5561C15.7268 21.2169 16.1936 21.6777 16.8544 21.5867L18.6792 21.326C18.9338 21.2897 19.2915 21.1078 19.4794 20.9259L21.4072 18.9981L21.8498 18.5555" stroke="#D2F4D6" stroke-width="0.606237" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.5767 13.8389C20.9828 15.2878 22.1165 16.4214 23.5715 16.8337" stroke="#D2F4D6" stroke-width="0.606237" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const UserDeleteIcon = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.411133" width="36.3742" height="36.3742" rx="18.1871" fill="#2F2F2F" />
    <rect x="0.363742" y="0.774875" width="35.6467" height="35.6467" rx="17.8234" stroke="black" stroke-opacity="0.1" stroke-width="0.727484" />
    <path d="M22.0731 22.29L20.3635 23.9996" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.0731 23.9996L20.3635 22.29" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.1871 24.5453C17.0838 24.5453 15.9865 24.2664 15.1499 23.7087C13.6828 22.7266 13.6828 21.1261 15.1499 20.1501C16.817 19.0346 19.5512 19.0346 21.2183 20.1501" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.4182 13.7239C20.7092 14.1543 20.879 14.6696 20.879 15.2273C20.8729 16.6823 19.7271 17.8645 18.2843 17.913C18.2237 17.9069 18.1509 17.9069 18.0842 17.913C16.6414 17.8645 15.4956 16.6823 15.4956 15.2273C15.4956 13.7421 16.696 12.5356 18.1873 12.5356" stroke="#D2F4D6" stroke-width="0.606237" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const CloseIcon = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.70605 5.32373L13.059 12.6767M5.70605 12.6767L13.059 5.32373" stroke="#364A15" stroke-width="0.735294" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const FilterIcon = () => (
  <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="54" height="54" rx="25.5" stroke="#364A15" />
    <path d="M34.0999 17.6001C35.1999 17.6001 36.0999 18.5001 36.0999 19.6001V21.8001C36.0999 22.6001 35.5999 23.6001 35.0999 24.1001L30.7999 27.9001C30.1999 28.4001 29.7999 29.4001 29.7999 30.2001V34.5001C29.7999 35.1001 29.3999 35.9001 28.8999 36.2001L27.4999 37.1001C26.1999 37.9001 24.3999 37.0001 24.3999 35.4001V30.1001C24.3999 29.4001 23.9999 28.5001 23.5999 28.0001L19.7999 24.0001C19.2999 23.5001 18.8999 22.6001 18.8999 22.0001V19.7001C18.8999 18.5001 19.7999 17.6001 20.8999 17.6001H29.8999" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M26.43 17.6001L21.5 25.5001" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const OpenIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3125 9.6874L17.975 3.0249" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.6249 6.275V2.375H14.7249" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.375 11.3047V12.9378C2.375 17.0003 4 18.6253 8.0625 18.6253H12.9375C17 18.6253 18.625 17.0003 18.625 12.9378V11.3128" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.6875 2.375H8.0625C4 2.375 2.375 4 2.375 8.0625" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const AddIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 15.375V5.625" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.75 10.5H15.375" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.625 10.5H10.2238" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.5 15.375V5.625" stroke="#364A15" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const OrderIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0156 2H17.0156C15.0156 2 14.0156 3 14.0156 5V7C14.0156 9 15.0156 10 17.0156 10H19.0156C21.0156 10 22.0156 9 22.0156 7V5" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.01562 22H7.01562C9.01562 22 10.0156 21 10.0156 19V17C10.0156 15 9.01562 14 7.01562 14H5.01562C3.01562 14 2.01562 15 2.01562 17V19" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.01562 10C8.22476 10 10.0156 8.20914 10.0156 6C10.0156 3.79086 8.22476 2 6.01562 2C3.80649 2 2.01562 3.79086 2.01562 6C2.01562 8.20914 3.80649 10 6.01562 10Z" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.0156 22C20.2248 22 22.0156 20.2091 22.0156 18C22.0156 15.7909 20.2248 14 18.0156 14C15.8065 14 14.0156 15.7909 14.0156 18C14.0156 20.2091 15.8065 22 18.0156 22Z" stroke="#364A15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const ConsumersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.9699 14.4399C18.3399 14.6699 19.8499 14.4299 20.9099 13.7199C22.3199 12.7799 22.3199 11.2399 20.9099 10.2999C19.8399 9.58992 18.3099 9.34991 16.9399 9.58991" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.99994 14.4399C5.62994 14.6699 4.11994 14.4299 3.05994 13.7199C1.64994 12.7799 1.64994 11.2399 3.05994 10.2999C4.12994 9.58992 5.65994 9.34991 7.02994 9.58991" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.91 17.7799C13.32 16.7199 10.69 16.7199 9.08997 17.7799C7.67997 18.7199 7.67997 20.2599 9.08997 21.1999C10.69 22.2699 13.31 22.2699 14.91 21.1999" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const ShopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.01025 15.71C3.01025 20.2 4.81025 22 9.30025 22H14.6903C19.1803 22 20.9803 20.2 20.9803 15.71V11.22" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.3103 12C20.3303 12 21.8103 10.36 21.6103 8.35L21.3303 5.6C20.9703 3 19.9703 2 17.3503 2H14.3003L15.0003 9.01C15.1703 10.66 16.6603 12 18.3103 12Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.64037 12C7.29037 12 8.78037 10.66 8.94037 9.01L9.16037 6.8L9.64037 2H6.59037C3.97037 2 2.97037 3 2.61037 5.6L2.34037 8.35C2.14037 10.36 3.62037 12 5.64037 12Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.0005 17C10.3305 17 9.50049 17.83 9.50049 19.5V22H14.5005V19.5C14.5005 17.83 13.6705 17 12.0005 17Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.00977 6C2.00977 3.79 3.79977 2 6.00977 2H15.0098V12C15.0098 13.1 14.1098 14 13.0098 14H2.00977V10.99" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19.0098 20H18.0098C18.0098 18.9 17.1098 18 16.0098 18C14.9098 18 14.0098 18.9 14.0098 20H10.0098C10.0098 18.9 9.10977 18 8.00977 18C6.90977 18 6.00977 18.9 6.00977 20H5.00977C3.34977 20 2.00977 18.66 2.00977 17V14H13.0098C14.1098 14 15.0098 13.1 15.0098 12V5H16.8498C17.5698 5 18.2298 5.39001 18.5898 6.01001L20.2998 9H19.0098C18.4598 9 18.0098 9.45 18.0098 10V13C18.0098 13.55 18.4598 14 19.0098 14H22.0098V17" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.00977 22C9.11434 22 10.0098 21.1046 10.0098 20C10.0098 18.8954 9.11434 18 8.00977 18C6.9052 18 6.00977 18.8954 6.00977 20C6.00977 21.1046 6.9052 22 8.00977 22Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.0098 22C17.1143 22 18.0098 21.1046 18.0098 20C18.0098 18.8954 17.1143 18 16.0098 18C14.9052 18 14.0098 18.8954 14.0098 20C14.0098 21.1046 14.9052 22 16.0098 22Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.0098 12V14H19.0098C18.4598 14 18.0098 13.55 18.0098 13V10C18.0098 9.45 18.4598 9 19.0098 9H20.2998L22.0098 12Z" stroke="#364A15" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const ChartDetails = ({ selectedStat }) => {
  if (!selectedStat) return null;

  return (
    <div className="mb-[120px]">
      <Card className=" h-[247.68px] w-[1176px] border-0 bg-[]">
        <div className="flex items-center justify-between mb-6">
          <span className="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600">
            Monthly {selectedStat.title} Growth
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full" />
              <span className="text-sm text-gray-600">Current Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full" />
              <span className="text-sm text-gray-600">Previous Year</span>
            </div>
          </div>
        </div>

        <div className="h-[221px]">
          <ResponsiveContainer width="100%" height="100%" >
            <LineChart
              data={selectedStat.data}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.4} />
              <XAxis 
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={({ x, y, payload }) => (
                    <g>
                      <rect
                        x={x -40}
                        y={y + 4}
                        width="74"
                        height="23"
                        rx="12"
                        ry="12"
                        fill="white"
                        stroke="#364A15"
                        strokeWidth="1"
                        
                      />
                      <text
                        x={x  }
                        y={y + 15 }
                        fill="#92400E"
                        stroke="#364A15"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: '12px',
                          fontWeight: '300',
                          textTransform: 'capitalize'
                        }}
                      >
                        {payload.value}
                      </text>
                    </g>
                  )}
                />
                <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000)}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload?.length) {
                    const currentValue = payload[0].value;
                    const previousValue = payload[1].value;
                    const growth = ((currentValue - previousValue) / previousValue * 100).toFixed(1);

                    return (
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm">
                        <div className="font-medium">{label}</div>
                        <div>Current: {(currentValue / 1000).toFixed(1)}k</div>
                        <div>Previous: {(previousValue / 1000).toFixed(1)}k</div>
                        <div className="text-green-400">Growth: +{growth}%</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line type="monotone" dataKey="current" stroke="#000" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "#000" }} />
              <Line type="monotone" dataKey="previous" stroke="#9CA3AF" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "#9CA3AF" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

const StatCard = ({ stat, isSelected, onClick }) => {
  const SVGs = CategorySVGs[stat.title] || CategorySVGs.Overall;

  return (
    <Card
      className={`h-[181px] w-[281px] relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border-0 ${isSelected ? 'ring-2 ring-black' : ''}`}
      onClick={() => onClick(stat)}
    >
      <div className="p-3 relative">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="text-sm text-gray-600">{stat.title}</div>
            <div className="">
              {stat.icon}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-semibold block mb-[40px]">{stat.value}</span>
            <div className="gap-2 justify-self-end">
              <span className={`text-xs border border-green-900 rounded-sm p-1 bg-[#364A15] ${stat.change.includes('+') ? 'text-white' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        </div>
        <SVGs.Blob />
        <div className="absolute bottom-4 left-[-60px] w-full h-12 overflow-hidden">
          <SVGs.Graph />
        </div>
      </div>
    </Card>
  );
};

const UserOwnerList = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStat, setSelectedStat] = useState(null);
  const [showInviteForm, setShowInviteForm] = useState(false);

  const users = useMemo(() => [
    { name: 'Ariene McCoy', email: 'arienemccoy@gmail.co', role: 'Vendor', gender: 'Female', access: 'Modify Store', joinedDate: 'May 15, 2024', status: 'Active', isVerified: true },
    { name: 'Brookly Simson', email: 'brooklysimson@gmail.co', role: 'Consumer', gender: 'Female', access: 'Modify Store', joinedDate: 'May 15, 2024', status: 'Active', isVerified: true },
    { name: 'Coldy Fisher', email: 'coldyfisher@gmail.co', role: 'Delivery', gender: 'Female', access: 'Modify Store', joinedDate: 'May 15, 2024', status: 'Inactive', isVerified: false },
    { name: 'Kobe Branes', email: 'kobebranes@gmail.co', role: 'Delivery', gender: 'Female', access: 'Modify Store', joinedDate: 'May 15, 2024', status: 'Inactive', isVerified: false }
  ], []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      switch (activeFilter) {
        case 'active':
          return user.status === 'Active';
        case 'inactive':
          return user.status === 'Inactive';
        case 'verified':
          return user.isVerified;
        case 'nonverified':
          return !user.isVerified;
        default:
          return true;
      }
    });
  }, [users, activeFilter]);

  const searchFilteredUsers = useMemo(() => {
    return filteredUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredUsers, searchTerm]);

  const handleInviteSubmit = (formData) => {
    console.log('New customer data:', formData);
    setShowInviteForm(false);
  };

  const stats = [
    {
      title: 'Overall',
      value: '152,000',
      change: '+15% more than last year',
      icon: <OrderIcon className="w-5 h-5 text-gray-600" />,
      data: [
        { month: 'Jan', current: 152000, previous: 132000 },
        { month: 'Feb', current: 148000, previous: 158000 },
        { month: 'Mar', current: 136000, previous: 164000 },
        { month: 'Apr', current: 162000, previous: 128000 },
        { month: 'May', current: 128000, previous: 116000 },
        { month: 'Jun', current: 155000, previous: 130000 },
        { month: 'Jul', current: 172000, previous: 145000 },
        { month: 'Aug', current: 168000, previous: 162000 },
        { month: 'Sep', current: 185000, previous: 178000 },
        { month: 'Oct', current: 170000, previous: 162000 },
        { month: 'Nov', current: 146000, previous: 150000 },
        { month: 'Dec', current: 135000, previous: 125000 }
      ]
    },
    {
      title: 'Consumers',
      value: '25,000',
      change: '+12%',
      icon: <ConsumersIcon className="w-5 h-5 text-gray-600" />,
      data: [
        { month: 'Jan', current: 20000, previous: 17500 },
        { month: 'Feb', current: 11000, previous: 28200 },
        { month: 'Mar', current: 32000, previous: 35000 },
        { month: 'Apr', current: 43000, previous: 40800 },
        { month: 'May', current: 53500, previous: 48100 },
        { month: 'Jun', current: 24000, previous: 55800 },
        { month: 'Jul', current: 44500, previous: 61200 },
        { month: 'Aug', current: 25000, previous: 71800 },
        { month: 'Sep', current: 35500, previous: 42300 },
        { month: 'Oct', current: 46000, previous: 22800 },
        { month: 'Nov', current: 66500, previous: 63200 },
        { month: 'Dec', current: 47000, previous: 53800 }
      ]
    },
    {
      title: 'Shop Owners',
      value: '52,000',
      change: '+15%',
      icon: <ShopIcon className="w-5 h-5 text-gray-600" />,
      data: [
        { month: 'Jan', current: 48000, previous: 42000 },
        { month: 'Feb', current: 49500, previous: 53000 },
        { month: 'Mar', current: 38800, previous: 42500 },
        { month: 'Apr', current: 20200, previous: 33500 },
        { month: 'May', current: 49800, previous: 53200 },
        { month: 'Jun', current: 51500, previous: 44500 },
        { month: 'Jul', current: 30800, previous: 64000 },
        { month: 'Aug', current: 52200, previous: 35000 },
        { month: 'Sep', current: 41800, previous: 44800 },
        { month: 'Oct', current: 23500, previous: 56000 },
        { month: 'Nov', current: 52800, previous: 45500 },
        { month: 'Dec', current: 44000, previous: 56500 }
      ]
    },
    {
      title: 'Delivery',
      value: '2,000',
      change: '+25%',
      icon: <DeliveryIcon className="w-5 h-5 text-gray-600" />,
      data: [
        { month: 'Jan', current: 1500, previous: 1200 },
        { month: 'Feb', current: 1600, previous: 1250 },
        { month: 'Mar', current: 1800, previous: 1400 },
        { month: 'Apr', current: 2000, previous: 1600 },
        { month: 'May', current: 2200, previous: 1800 },
        { month: 'Jun', current: 2400, previous: 1900 },
        { month: 'Jul', current: 2500, previous: 2000 },
        { month: 'Aug', current: 2400, previous: 1950 },
        { month: 'Sep', current: 2200, previous: 1800 },
        { month: 'Oct', current: 2000, previous: 1600 },
        { month: 'Nov', current: 1800, previous: 1400 },
        { month: 'Dec', current: 1600, previous: 1300 }
      ]
    }
  ];

  const getRoleBgColor = (role) => ({
    Vendor: 'bg-green-100 text-[#364A15]',
    Consumer: 'bg-red-100 text-[#364A15]',
    Delivery: 'bg-blue-100 text-[#364A15]'
  }[role] || 'bg-gray-100 text-[#364A15]');

  const handleStatClick = (stat) => {
    setSelectedStat(stat);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-1 mr-[162px]">
          <div></div>
          <div className=" flex space-x-3">
            {['View All', 'Consumers', 'Shop owners', 'Delivery', 'Admins'].map((btn, i) => (
              <button
                key={btn}
                className={`px-4 py-2 rounded-full ${i === 0 ? 'bg-green-50 text-green-600' : 'bg-white border border-gray-500'
                  }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>


        <div className="flex-1 ml-20 p-8">
        <div className="grid grid-cols-4 mb-5 mr-[115px]">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                stat={stat} 
                isSelected={selectedStat?.title === stat.title}
                onClick={handleStatClick}
              />
            ))}
          </div>

          {selectedStat && <ChartDetails selectedStat={selectedStat} />}

          <div className="flex justify-between items-center mb-6 mr-[133px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Enter name"
                className="pl-10 pr-10 py-2 border rounded-full bg-[#e5fae6] h-[50px] w-[319.12px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 focus:outline-none"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>



            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className={` ${activeFilter !== 'all' ? 'bg-green-100' : 'bg-white'}`}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <FilterIcon className={`h-5 w-5 ${activeFilter !== 'all' ? 'text-green-600' : 'text-gray-600'}`} />
                </button>
                <FilterDropdown
                  isOpen={isFilterOpen}
                  onClose={() => setIsFilterOpen(false)}
                  onFilterChange={(filter) => setActiveFilter(filter)}
                  activeFilter={activeFilter}
                />
              </div>
              <button className="px-4 py-4 rounded-full border border-[#364A15] bg-white text-gray-700 flex items-center gap-2">
                <OpenIcon className="h-4 w-4" />
                Export CSV
              </button>
              <button
                className="px-4 py-4 rounded-full border border-[#364A15] bg-white text-gray-700 flex items-center gap-2"
                onClick={() => setShowInviteForm(true)}
              >
                <AddIcon className="h-4 w-4" />
                Invite Customer
              </button>
            </div>
          </div>

          <Card className="overflow-hidden w-[1171px] h-[504px]">
            <table className="">
              <thead >
                <tr className="text-left border-b bg-gray-50">
                  <th className="p-4 font-medium">Names</th>
                  <th className="p-4 font-medium">Roles</th>
                  <th className="p-4 font-medium">Gender</th>
                  <th className="p-4 font-medium">Access</th>
                  <th className="p-4 font-medium">Joined date</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {searchFilteredUsers.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 w-[1159px] h-[86px]">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <img src="/api/placeholder/40/40" alt={user.name} className="rounded-full" />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-4 py-3 rounded-full text-sm  ${getRoleBgColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">{user.gender}</td>
                    <td className="p-4">{user.access}</td>
                    <td className="p-4">{user.joinedDate}</td>
                    <td className="p-4">
                      <span className={`px-4 py-3 rounded-full text-sm ${user.status === 'Active' ? 'bg-green-100 text-[#364A15]' : 'bg-gray-100 text-gray-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {[UserDeleteIcon, EditIcon, VerifiedIcon].map((Icon, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <div className="w-px h-6 bg-gray-300" />}
                            <button className="p-2 rounded-full hover:bg-gray-100">
                              <Icon className="w-4 h-4 text-gray-600" />
                            </button>
                          </React.Fragment>
                        ))}
                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {showInviteForm && (
          <InviteCustomerForm
            onClose={() => setShowInviteForm(false)}
            onSubmit={handleInviteSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default UserOwnerList;