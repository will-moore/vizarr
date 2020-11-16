import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import DeckGL from 'deck.gl';
import { OrthographicView } from '@deck.gl/core';
import type { Layer } from '@deck.gl/core';

import { viewerViewState, layersSelector } from '../state';
import type { VivLayerProps, ZarrLoader } from 'viv';


function WrappedViewStateDeck({ layers, children }: { layers: Layer<VivLayerProps>[], children: any }): JSX.Element {
  const [viewState, setViewState] = useRecoilState(viewerViewState);

  // If viewState hasn't been updated, use the first loader to guess viewState
  // TODO: There is probably a better place / way to set the intital view and this is a hack.
  if (viewState?.default && (layers[0]?.props as VivLayerProps)?.loader?.base) {
    const loader = (layers[0].props as VivLayerProps).loader as ZarrLoader;
    const [height, width] = loader.base.shape.slice(-2);
    const zoom = -loader.numLevels;
    const target = [width / 2, height / 2, 0];
    setViewState({ zoom, target });
  };
  
  const views = [new OrthographicView({ id: 'ortho', controller: true })];

  return (
    <DeckGL layers={layers} viewState={viewState} onViewStateChange={(e) => setViewState(e.viewState)} views={views}>
      {children}
    </DeckGL>
  );
}

function Viewer(): JSX.Element {
  const layerConstructors = useRecoilValue(layersSelector);
  const [hoverInfo, setHoverInfo] = useState({
    x: 500, y: 200, object: { message: "Hello World" }
  });
  const layers = layerConstructors.map((l) => {
    // Something weird with Recoil Loadable here. Need to cast to any.
    const { Layer, layerProps, on } = l as any;
    const onHover = (info) => {
      console.log('onHover....', info.pixel);
      if (layerProps.getTooltip) {
        let text = layerProps.getTooltip(info);
        if (text && info.object) {
          info.object.message = text;
          info.x = info.pixel[0] / 2;
          info.y = (info.pixel[1] / 2) - 20;
        }
        setHoverInfo(info);
      }
    }
    return !Layer || !on ? null : new Layer({ onHover, ...layerProps });
  });

  console.log('hoverInfo', hoverInfo);
  return (
    <WrappedViewStateDeck layers={layers}>
      <div style={{ position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y }}>
        {hoverInfo.object && (
          <div style={{ background: 'white', position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y }}>
            { hoverInfo.object.message}
          </div>
        )}
      </div>
    </WrappedViewStateDeck>
  )
}

export default Viewer;
