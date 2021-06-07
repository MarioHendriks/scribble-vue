import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'mention-hashtag' {
  export enum ExtractionType {
    MENTION = '@',
    HASH_TAG = '#',
    ALL = 'all',
  }
  export type ExtractionOptions = { type: ExtractionType; unique: boolean; symbol: boolean };
  export type ExtractionResult = { mentions: string[]; hashtags: string[] };

  function extract(text: string, options: ExtractionType.ALL): ExtractionResult;
  function extract(
    text: string,
    options: ExtractionOptions | ExtractionType.MENTION | ExtractionType.HASH_TAG,
  ): string[];

  export default extract;
}