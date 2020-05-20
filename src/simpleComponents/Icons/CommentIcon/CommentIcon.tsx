/**
 *  
 * Descirption:
 *   It is provides Comment Icon from passing svg to rmwc icon with the given height and width from the props
 *  */ 


import React from 'react'
 import {Icon} from '@rmwc/icon';
 import '@rmwc/icon/styles';

const CommentIcon =(props:any) => {
    return (
            
            <Icon  icon={{
                icon: (<svg version="1.1" id="Capa_1"  x="0px" y="0px"
                {...props.styles} viewBox="0 0 508.044 508.044"
               >
           <g>
               <g>
                   <path d="M0.108,352.536c0,66.794,54.144,120.938,120.937,120.938c66.794,0,120.938-54.144,120.938-120.938
                       s-54.144-120.937-120.938-120.937c-13.727,0-26.867,2.393-39.168,6.61C109.093,82.118,230.814-18.543,117.979,64.303
                       C-7.138,156.17-0.026,348.84,0.114,352.371C0.114,352.426,0.108,352.475,0.108,352.536z"/>

                   <path d="M266.169,352.536c0,66.794,54.144,120.938,120.938,120.938s120.938-54.144,120.938-120.938S453.9,231.599,387.106,231.599
                       c-13.728,0-26.867,2.393-39.168,6.61C375.154,82.118,496.875-18.543,384.04,64.303C258.923,156.17,266.034,348.84,266.175,352.371
                       C266.175,352.426,266.169,352.475,266.169,352.536z"/>
               </g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           <g>
           </g>
           </svg>
           ),
                strategy: 'component'
              }} />
    )
}

export default CommentIcon
