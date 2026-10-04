type Piece = {
  x: number;
  y: number;
  w: number;
  h: number;
  boxW?: number;
  boxH?: number;
  rotate?: number;
};

const PIECES: Piece[] = [
  { x: 0.85, y: 0.08, w: 20.142, h: 20.142 },
  { x: 22.54, y: 0.09, w: 20.141, h: 13.09, boxW: 13.09, boxH: 20.141, rotate: 90 },
  { x: 43.08, y: 0.09, w: 20.141, h: 13.09, boxW: 13.09, boxH: 20.141, rotate: 90 },
  { x: 57.71, y: 0.08, w: 20.141, h: 21.817, boxW: 21.817, boxH: 20.141, rotate: -90 },
  { x: 81.08, y: 0.08, w: 20.141, h: 13.09, boxW: 13.09, boxH: 20.141, rotate: -90 },
  { x: 31.26, y: 0, w: 20.23, h: 16.18, boxW: 16.18, boxH: 20.23, rotate: 90 },
  { x: 0, y: 22.3, w: 20.142, h: 20.142 },
  { x: 16.63, y: 21.04, w: 4.363, h: 4.363, rotate: 90 },
  { x: 20.44, y: 22.3, w: 15.185, h: 20.142 },
  { x: 66.81, y: 22.3, w: 15.185, h: 20.142 },
  { x: 83.54, y: 22.3, w: 12.266, h: 20.142 },
  { x: 37.17, y: 22.3, w: 20.142, h: 8.727, boxW: 8.727, boxH: 20.142, rotate: 90 },
  { x: 53.76, y: 22.3, w: 12.252, h: 12.283, boxW: 12.283, boxH: 12.252, rotate: 90 },
  { x: 45.9, y: 23.16, w: 19.303, h: 19.275 },
  { x: 58.83, y: 23.06, w: 6.461, h: 6.449 },
  { x: 0, y: 44.67, w: 10.071, h: 5.559 },
  { x: 87.91, y: 44.67, w: 7.902, h: 5.559, rotate: 180 },
  { x: 10.07, y: 44.67, w: 77.835, h: 7.334 },
];

const HEADER_FILES = [
  "da567",
  "0c9ba",
  "de7fb",
  "65454",
  "70ed2",
  "f007c",
  "2fb73",
  "c0eac",
  "0e85f",
  "98a9d",
  "b945e",
  "84c6b",
  "a864c",
  "86128",
  "c719e",
  "096e5",
  "4797a",
  "0f6d1",
];

const FOOTER_FILES = [
  "b7322",
  "3ebe1",
  "a6292",
  "30c92",
  "36888",
  "271db",
  "856c7",
  "66ed5",
  "68b38",
  "2e287",
  "01ae6",
  "f61af",
  "f3a26",
  "d0dfe",
  "78193",
  "9c6d8",
  "b0bee",
  "f4422",
];

export function LogoMark({ variant }: { variant: "header" | "footer" }) {
  const files = variant === "header" ? HEADER_FILES : FOOTER_FILES;
  const folder = variant === "header" ? "header" : "footer";

  return (
    <span className="relative block h-[52px] w-[96px]" aria-hidden="true">
      {PIECES.map((piece, index) => {
        const boxW = piece.boxW ?? piece.w;
        const boxH = piece.boxH ?? piece.h;
        const src = `/brand/${folder}/${files[index]}.svg`;

        return (
          <span
            key={src}
            className="absolute"
            style={{ left: piece.x, top: piece.y, width: boxW, height: boxH }}
          >
            <img
              src={src}
              alt=""
              width={piece.w}
              height={piece.h}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: piece.w,
                height: piece.h,
                transform: `translate(-50%, -50%) rotate(${piece.rotate ?? 0}deg)`,
              }}
            />
          </span>
        );
      })}
    </span>
  );
}
