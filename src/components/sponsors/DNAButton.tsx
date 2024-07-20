type DNAButtonProps = {
  onPlatHandler?: () => void;
  onGoldHandler?: () => void;
  onSilverHandler?: () => void;
  onBronzeHandler?: () => void;
};

function DNAButton({
  onPlatHandler,
  onGoldHandler,
  onSilverHandler,
  onBronzeHandler,
}: DNAButtonProps) {
  function onPlat() {
    onPlatHandler?.();
  }

  function onGold() {
    onGoldHandler?.();
  }

  function onSilver() {
    onSilverHandler?.();
  }

  function onBronze() {
    onBronzeHandler?.();
  }

  return (
    <svg
      className="text-primary"
      width="153"
      height="370"
      viewBox="0 0 153 370"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1312 30.8185H122.5"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M21.5 58.7272H116.5"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M33 84H104.5"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M16.694 342.433H74.097H131.5"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M23.4694 314.978H115"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M33.3895 291.515H105"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <g
        className={
          onBronzeHandler
            ? "cursor-pointer hover:opacity-60 transition-all duration-150 hover:scale-105 hover:-translate-y-3"
            : ""
        }
        onClick={onBronze}
      >
        <title>Bronze Tier</title>
        <path
          className={onBronzeHandler ? "stroke-bronze" : "stroke-current"}
          d="M40 231.62H116.5"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          className={onBronzeHandler ? "fill-bronze" : "fill-current"}
          height={2}
          d="M114 238C116.761 238 119 235.761 119 233C119 230.239 116.761 228 114 228C111.239 228 109 230.239 109 233C109 235.761 111.239 238 114 238Z"
        />
      </g>
      <g
        className={
          onSilverHandler
            ? "cursor-pointer hover:opacity-60 transition-all duration-150 hover:scale-105 hover:-translate-y-2"
            : ""
        }
        onClick={onSilver}
      >
        <title>Silver Tier</title>
        <path
          className={onSilverHandler ? "stroke-silver" : "stroke-current"}
          d="M20 206.816L132.712 206.816"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          className={onSilverHandler ? "fill-silver" : "fill-current"}
          d="M136.5 216C140.642 216 144 212.642 144 208.5C144 204.358 140.642 201 136.5 201C132.358 201 129 204.358 129 208.5C129 212.642 132.358 216 136.5 216Z"
        />
      </g>
      <g
        className={
          onGoldHandler
            ? "cursor-pointer hover:opacity-60 transition-all duration-150 hover:scale-105 hover:-translate-y-2"
            : ""
        }
        onClick={onGold}
      >
        <title>Gold Tier</title>
        <path
          className={onGoldHandler ? "stroke-gold" : "stroke-current"}
          d="M15 182.255H142.04"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          className={onGoldHandler ? "fill-gold" : "fill-current"}
          d="M144.5 194C149.194 194 153 190.194 153 185.5C153 180.806 149.194 177 144.5 177C139.806 177 136 180.806 136 185.5C136 190.194 139.806 194 144.5 194Z"
        />
      </g>
      <g
        className={
          onPlatHandler
            ? "cursor-pointer hover:opacity-60 transition-all duration-150 hover:scale-105 hover:-translate-y-2"
            : ""
        }
        onClick={onPlat}
      >
        <title>Platinum Tier</title>
        <path
          className={onPlatHandler ? "stroke-platinum" : "stroke-current"}
          d="M22.5 156.896H135.812"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          className={onPlatHandler ? "fill-platinum" : "fill-current"}
          d="M136.13 166.49C140.272 166.49 143.63 163.133 143.63 158.99C143.63 154.848 140.272 151.49 136.13 151.49C131.988 151.49 128.63 154.848 128.63 158.99C128.63 163.133 131.988 166.49 136.13 166.49Z"
        />
      </g>
      <path
        d="M48.5 131.313L115 131.312"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M10 12C13.3137 12 16 9.31371 16 6C16 2.68629 13.3137 0 10 0C6.68629 0 4 2.68629 4 6C4 9.31371 6.68629 12 10 12Z"
        fill="currentColor"
      />
      <path
        d="M15.5 41C20.1944 41 24 37.1944 24 32.5C24 27.8056 20.1944 24 15.5 24C10.8056 24 7 27.8056 7 32.5C7 37.1944 10.8056 41 15.5 41Z"
        fill="currentColor"
      />
      <path
        d="M21.5 67C25.6421 67 29 63.6421 29 59.5C29 55.3578 25.6421 52 21.5 52C17.3579 52 14 55.3578 14 59.5C14 63.6421 17.3579 67 21.5 67Z"
        fill="currentColor"
      />
      <path
        d="M29 90C32.3137 90 35 87.3137 35 84C35 80.6863 32.3137 78 29 78C25.6863 78 23 80.6863 23 84C23 87.3137 25.6863 90 29 90Z"
        fill="currentColor"
      />
      <path
        d="M43 109C45.7614 109 48 106.761 48 104C48 101.239 45.7614 99 43 99C40.2386 99 38 101.239 38 104C38 106.761 40.2386 109 43 109Z"
        fill="currentColor"
      />
      <path
        d="M75 120C77.7614 120 80 117.761 80 115C80 112.239 77.7614 110 75 110C72.2386 110 70 112.239 70 115C70 117.761 72.2386 120 75 120Z"
        fill="currentColor"
      />
      <path
        d="M107 108C109.761 108 112 105.761 112 103C112 100.239 109.761 98 107 98C104.239 98 102 100.239 102 103C102 105.761 104.239 108 107 108Z"
        fill="currentColor"
      />
      <path
        d="M5 211C7.76142 211 10 208.761 10 206C10 203.239 7.76142 201 5 201C2.23858 201 0 203.239 0 206C0 208.761 2.23858 211 5 211Z"
        fill="currentColor"
      />
      <path
        d="M28 296C30.7614 296 33 293.761 33 291C33 288.239 30.7614 286 28 286C25.2386 286 23 288.239 23 291C23 293.761 25.2386 296 28 296Z"
        fill="currentColor"
      />
      <path
        d="M20 319C22.7614 319 25 316.761 25 314C25 311.239 22.7614 309 20 309C17.2386 309 15 311.239 15 314C15 316.761 17.2386 319 20 319Z"
        fill="currentColor"
      />
      <path
        d="M13 347C15.7614 347 18 344.761 18 342C18 339.239 15.7614 337 13 337C10.2386 337 8 339.239 8 342C8 344.761 10.2386 347 13 347Z"
        fill="currentColor"
      />
      <path
        d="M9 370C11.7614 370 14 367.761 14 365C14 362.239 11.7614 360 9 360C6.23858 360 4 362.239 4 365C4 367.761 6.23858 370 9 370Z"
        fill="currentColor"
      />
      <path
        d="M140 10C142.761 10 145 7.76142 145 5C145 2.23858 142.761 0 140 0C137.239 0 135 2.23858 135 5C135 7.76142 137.239 10 140 10Z"
        fill="currentColor"
      />
      <path
        d="M140 37C142.761 37 145 34.7614 145 32C145 29.2386 142.761 27 140 27C137.239 27 135 29.2386 135 32C135 34.7614 137.239 37 140 37Z"
        fill="currentColor"
      />
      <path
        d="M130 64C132.761 64 135 61.7614 135 59C135 56.2386 132.761 54 130 54C127.239 54 125 56.2386 125 59C125 61.7614 127.239 64 130 64Z"
        fill="currentColor"
      />
      <path
        d="M120 89C122.761 89 125 86.7614 125 84C125 81.2386 122.761 79 120 79C117.239 79 115 81.2386 115 84C115 86.7614 117.239 89 120 89Z"
        fill="currentColor"
      />
      <path
        d="M3.5 185C5.433 185 7 183.433 7 181.5C7 179.567 5.433 178 3.5 178C1.567 178 0 179.567 0 181.5C0 183.433 1.567 185 3.5 185Z"
        fill="currentColor"
      />
      <path
        d="M122.5 299C126.642 299 130 295.642 130 291.5C130 287.358 126.642 284 122.5 284C118.358 284 115 287.358 115 291.5C115 295.642 118.358 299 122.5 299Z"
        fill="currentColor"
      />
      <path
        d="M137 319C139.761 319 142 316.761 142 314C142 311.239 139.761 309 137 309C134.239 309 132 311.239 132 314C132 316.761 134.239 319 137 319Z"
        fill="currentColor"
      />
      <path
        d="M145.5 346C147.433 346 149 344.433 149 342.5C149 340.567 147.433 339 145.5 339C143.567 339 142 340.567 142 342.5C142 344.433 143.567 346 145.5 346Z"
        fill="currentColor"
      />
      <path
        d="M149.5 370C151.433 370 153 368.433 153 366.5C153 364.567 151.433 363 149.5 363C147.567 363 146 364.567 146 366.5C146 368.433 147.567 370 149.5 370Z"
        fill="currentColor"
      />
      <path
        d="M107.5 277C112.194 277 116 273.194 116 268.5C116 263.806 112.194 260 107.5 260C102.806 260 99 263.806 99 268.5C99 273.194 102.806 277 107.5 277Z"
        fill="currentColor"
      />
      <path
        d="M43 274C45.7614 274 48 271.761 48 269C48 266.239 45.7614 264 43 264C40.2386 264 38 266.239 38 269C38 271.761 40.2386 274 43 274Z"
        fill="currentColor"
      />
      <path
        d="M24.5 241C28.6421 241 32 237.642 32 233.5C32 229.358 28.6421 226 24.5 226C20.3579 226 17 229.358 17 233.5C17 237.642 20.3579 241 24.5 241Z"
        fill="currentColor"
      />
      <path
        d="M34 137C36.7614 137 39 134.761 39 132C39 129.239 36.7614 127 34 127C31.2386 127 29 129.239 29 132C29 134.761 31.2386 137 34 137Z"
        fill="currentColor"
      />
      <path
        d="M113 138C116.314 138 119 135.314 119 132C119 128.686 116.314 126 113 126C109.686 126 107 128.686 107 132C107 135.314 109.686 138 113 138Z"
        fill="currentColor"
      />
      <path
        d="M12.5 161C14.433 161 16 159.433 16 157.5C16 155.567 14.433 154 12.5 154C10.567 154 9 155.567 9 157.5C9 159.433 10.567 161 12.5 161Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DNAButton;
