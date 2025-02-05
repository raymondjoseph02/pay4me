import { useGlobalContext } from "../../../context/GlobalContext";
function WhyWeBuild() {
  const { targetAboutDiv } = useGlobalContext();
  return (
    <div ref={targetAboutDiv} className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/yLVEWumxVOg?si=fVQsm9ej4xMldrwB?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;  picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

export default WhyWeBuild;
