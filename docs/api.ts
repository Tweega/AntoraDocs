// package: norsk.api.media
// file: media.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class MediaNodeId extends jspb.Message { 
    getId(): string;
    setId(value: string): MediaNodeId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaNodeId.AsObject;
    static toObject(includeInstance: boolean, msg: MediaNodeId): MediaNodeId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaNodeId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaNodeId;
    static deserializeBinaryFromReader(message: MediaNodeId, reader: jspb.BinaryReader): MediaNodeId;
}

export namespace MediaNodeId {
    export type AsObject = {
        id: string,
    }
}

export class Resolution extends jspb.Message { 
    getWidth(): number;
    setWidth(value: number): Resolution;
    getHeight(): number;
    setHeight(value: number): Resolution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resolution.AsObject;
    static toObject(includeInstance: boolean, msg: Resolution): Resolution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resolution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resolution;
    static deserializeBinaryFromReader(message: Resolution, reader: jspb.BinaryReader): Resolution;
}

export namespace Resolution {
    export type AsObject = {
        width: number,
        height: number,
    }
}

export class SourceName extends jspb.Message { 
    getSourceName(): string;
    setSourceName(value: string): SourceName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceName.AsObject;
    static toObject(includeInstance: boolean, msg: SourceName): SourceName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceName;
    static deserializeBinaryFromReader(message: SourceName, reader: jspb.BinaryReader): SourceName;
}

export namespace SourceName {
    export type AsObject = {
        sourceName: string,
    }
}

export class ProgramNumber extends jspb.Message { 
    getProgramNumber(): number;
    setProgramNumber(value: number): ProgramNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgramNumber.AsObject;
    static toObject(includeInstance: boolean, msg: ProgramNumber): ProgramNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgramNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgramNumber;
    static deserializeBinaryFromReader(message: ProgramNumber, reader: jspb.BinaryReader): ProgramNumber;
}

export namespace ProgramNumber {
    export type AsObject = {
        programNumber: number,
    }
}

export class StreamId extends jspb.Message { 
    getStreamId(): number;
    setStreamId(value: number): StreamId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamId.AsObject;
    static toObject(includeInstance: boolean, msg: StreamId): StreamId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamId;
    static deserializeBinaryFromReader(message: StreamId, reader: jspb.BinaryReader): StreamId;
}

export namespace StreamId {
    export type AsObject = {
        streamId: number,
    }
}

export class RenditionName extends jspb.Message { 
    getRenditionName(): string;
    setRenditionName(value: string): RenditionName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RenditionName.AsObject;
    static toObject(includeInstance: boolean, msg: RenditionName): RenditionName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RenditionName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RenditionName;
    static deserializeBinaryFromReader(message: RenditionName, reader: jspb.BinaryReader): RenditionName;
}

export namespace RenditionName {
    export type AsObject = {
        renditionName: string,
    }
}

export class InputPin extends jspb.Message { 
    getInputPin(): string;
    setInputPin(value: string): InputPin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputPin.AsObject;
    static toObject(includeInstance: boolean, msg: InputPin): InputPin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputPin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputPin;
    static deserializeBinaryFromReader(message: InputPin, reader: jspb.BinaryReader): InputPin;
}

export namespace InputPin {
    export type AsObject = {
        inputPin: string,
    }
}

export class StreamKey extends jspb.Message { 

    hasSourceName(): boolean;
    clearSourceName(): void;
    getSourceName(): SourceName | undefined;
    setSourceName(value?: SourceName): StreamKey;

    hasProgramNumber(): boolean;
    clearProgramNumber(): void;
    getProgramNumber(): ProgramNumber | undefined;
    setProgramNumber(value?: ProgramNumber): StreamKey;

    hasStreamId(): boolean;
    clearStreamId(): void;
    getStreamId(): StreamId | undefined;
    setStreamId(value?: StreamId): StreamKey;

    hasRenditionName(): boolean;
    clearRenditionName(): void;
    getRenditionName(): RenditionName | undefined;
    setRenditionName(value?: RenditionName): StreamKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamKey.AsObject;
    static toObject(includeInstance: boolean, msg: StreamKey): StreamKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamKey;
    static deserializeBinaryFromReader(message: StreamKey, reader: jspb.BinaryReader): StreamKey;
}

export namespace StreamKey {
    export type AsObject = {
        sourceName?: SourceName.AsObject,
        programNumber?: ProgramNumber.AsObject,
        streamId?: StreamId.AsObject,
        renditionName?: RenditionName.AsObject,
    }
}

export class StreamMetadata extends jspb.Message { 

    hasStreamKey(): boolean;
    clearStreamKey(): void;
    getStreamKey(): StreamKey | undefined;
    setStreamKey(value?: StreamKey): StreamMetadata;

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): StreamMetadata.AudioMetadata | undefined;
    setAudio(value?: StreamMetadata.AudioMetadata): StreamMetadata;

    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): StreamMetadata.VideoMetadata | undefined;
    setVideo(value?: StreamMetadata.VideoMetadata): StreamMetadata;

    hasSubtitle(): boolean;
    clearSubtitle(): void;
    getSubtitle(): StreamMetadata.SubtitleMetadata | undefined;
    setSubtitle(value?: StreamMetadata.SubtitleMetadata): StreamMetadata;

    getMessageCase(): StreamMetadata.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StreamMetadata): StreamMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamMetadata;
    static deserializeBinaryFromReader(message: StreamMetadata, reader: jspb.BinaryReader): StreamMetadata;
}

export namespace StreamMetadata {
    export type AsObject = {
        streamKey?: StreamKey.AsObject,
        audio?: StreamMetadata.AudioMetadata.AsObject,
        video?: StreamMetadata.VideoMetadata.AsObject,
        subtitle?: StreamMetadata.SubtitleMetadata.AsObject,
    }


    export class AudioMetadata extends jspb.Message { 
        getCodec(): string;
        setCodec(value: string): AudioMetadata;
        getSampleRate(): number;
        setSampleRate(value: number): AudioMetadata;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AudioMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: AudioMetadata): AudioMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AudioMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AudioMetadata;
        static deserializeBinaryFromReader(message: AudioMetadata, reader: jspb.BinaryReader): AudioMetadata;
    }

    export namespace AudioMetadata {
        export type AsObject = {
            codec: string,
            sampleRate: number,
        }
    }

    export class VideoMetadata extends jspb.Message { 
        getCodec(): string;
        setCodec(value: string): VideoMetadata;
        getWidth(): number;
        setWidth(value: number): VideoMetadata;
        getHeight(): number;
        setHeight(value: number): VideoMetadata;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): VideoMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: VideoMetadata): VideoMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: VideoMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): VideoMetadata;
        static deserializeBinaryFromReader(message: VideoMetadata, reader: jspb.BinaryReader): VideoMetadata;
    }

    export namespace VideoMetadata {
        export type AsObject = {
            codec: string,
            width: number,
            height: number,
        }
    }

    export class SubtitleMetadata extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubtitleMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: SubtitleMetadata): SubtitleMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubtitleMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubtitleMetadata;
        static deserializeBinaryFromReader(message: SubtitleMetadata, reader: jspb.BinaryReader): SubtitleMetadata;
    }

    export namespace SubtitleMetadata {
        export type AsObject = {
        }
    }


    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        AUDIO = 2,
        VIDEO = 3,
        SUBTITLE = 4,
    }

}

export class Context extends jspb.Message { 
    clearStreamsList(): void;
    getStreamsList(): Array<StreamMetadata>;
    setStreamsList(value: Array<StreamMetadata>): Context;
    addStreams(value?: StreamMetadata, index?: number): StreamMetadata;
    getBlockingCallRef(): string;
    setBlockingCallRef(value: string): Context;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
    export type AsObject = {
        streamsList: Array<StreamMetadata.AsObject>,
        blockingCallRef: string,
    }
}

export class BlockingCallRef extends jspb.Message { 

    hasMediaNodeId(): boolean;
    clearMediaNodeId(): void;
    getMediaNodeId(): MediaNodeId | undefined;
    setMediaNodeId(value?: MediaNodeId): BlockingCallRef;
    getBlockingCallRef(): string;
    setBlockingCallRef(value: string): BlockingCallRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockingCallRef.AsObject;
    static toObject(includeInstance: boolean, msg: BlockingCallRef): BlockingCallRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockingCallRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockingCallRef;
    static deserializeBinaryFromReader(message: BlockingCallRef, reader: jspb.BinaryReader): BlockingCallRef;
}

export namespace BlockingCallRef {
    export type AsObject = {
        mediaNodeId?: MediaNodeId.AsObject,
        blockingCallRef: string,
    }
}

export class ConnectionId extends jspb.Message { 
    getId(): string;
    setId(value: string): ConnectionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionId.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionId): ConnectionId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionId;
    static deserializeBinaryFromReader(message: ConnectionId, reader: jspb.BinaryReader): ConnectionId;
}

export namespace ConnectionId {
    export type AsObject = {
        id: string,
    }
}

export class RtmpSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): RtmpSourceConfiguration;
    getPort(): number;
    setPort(value: number): RtmpSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpSourceConfiguration): RtmpSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpSourceConfiguration;
    static deserializeBinaryFromReader(message: RtmpSourceConfiguration, reader: jspb.BinaryReader): RtmpSourceConfiguration;
}

export namespace RtmpSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        port: number,
    }
}

export class RtmpConnectionAccept extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpConnectionAccept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpConnectionAccept.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpConnectionAccept): RtmpConnectionAccept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpConnectionAccept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpConnectionAccept;
    static deserializeBinaryFromReader(message: RtmpConnectionAccept, reader: jspb.BinaryReader): RtmpConnectionAccept;
}

export namespace RtmpConnectionAccept {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
    }
}

export class RtmpConnectionReject extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpConnectionReject;
    getReason(): string;
    setReason(value: string): RtmpConnectionReject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpConnectionReject.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpConnectionReject): RtmpConnectionReject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpConnectionReject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpConnectionReject;
    static deserializeBinaryFromReader(message: RtmpConnectionReject, reader: jspb.BinaryReader): RtmpConnectionReject;
}

export namespace RtmpConnectionReject {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        reason: string,
    }
}

export class RtmpStreamAccept extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpStreamAccept;
    getStreamId(): number;
    setStreamId(value: number): RtmpStreamAccept;

    hasVideoStreamKey(): boolean;
    clearVideoStreamKey(): void;
    getVideoStreamKey(): StreamKey | undefined;
    setVideoStreamKey(value?: StreamKey): RtmpStreamAccept;

    hasAudioStreamKey(): boolean;
    clearAudioStreamKey(): void;
    getAudioStreamKey(): StreamKey | undefined;
    setAudioStreamKey(value?: StreamKey): RtmpStreamAccept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpStreamAccept.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpStreamAccept): RtmpStreamAccept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpStreamAccept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpStreamAccept;
    static deserializeBinaryFromReader(message: RtmpStreamAccept, reader: jspb.BinaryReader): RtmpStreamAccept;
}

export namespace RtmpStreamAccept {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        streamId: number,
        videoStreamKey?: StreamKey.AsObject,
        audioStreamKey?: StreamKey.AsObject,
    }
}

export class RtmpStreamReject extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpStreamReject;
    getStreamId(): number;
    setStreamId(value: number): RtmpStreamReject;
    getReason(): string;
    setReason(value: string): RtmpStreamReject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpStreamReject.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpStreamReject): RtmpStreamReject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpStreamReject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpStreamReject;
    static deserializeBinaryFromReader(message: RtmpStreamReject, reader: jspb.BinaryReader): RtmpStreamReject;
}

export namespace RtmpStreamReject {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        streamId: number,
        reason: string,
    }
}

export class RtmpSourceMessage extends jspb.Message { 

    hasInitialConfig(): boolean;
    clearInitialConfig(): void;
    getInitialConfig(): RtmpSourceConfiguration | undefined;
    setInitialConfig(value?: RtmpSourceConfiguration): RtmpSourceMessage;

    hasConnectionAccept(): boolean;
    clearConnectionAccept(): void;
    getConnectionAccept(): RtmpConnectionAccept | undefined;
    setConnectionAccept(value?: RtmpConnectionAccept): RtmpSourceMessage;

    hasConnectionReject(): boolean;
    clearConnectionReject(): void;
    getConnectionReject(): RtmpConnectionReject | undefined;
    setConnectionReject(value?: RtmpConnectionReject): RtmpSourceMessage;

    hasStreamAccept(): boolean;
    clearStreamAccept(): void;
    getStreamAccept(): RtmpStreamAccept | undefined;
    setStreamAccept(value?: RtmpStreamAccept): RtmpSourceMessage;

    hasStreamReject(): boolean;
    clearStreamReject(): void;
    getStreamReject(): RtmpStreamReject | undefined;
    setStreamReject(value?: RtmpStreamReject): RtmpSourceMessage;

    getMessageCase(): RtmpSourceMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpSourceMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpSourceMessage): RtmpSourceMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpSourceMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpSourceMessage;
    static deserializeBinaryFromReader(message: RtmpSourceMessage, reader: jspb.BinaryReader): RtmpSourceMessage;
}

export namespace RtmpSourceMessage {
    export type AsObject = {
        initialConfig?: RtmpSourceConfiguration.AsObject,
        connectionAccept?: RtmpConnectionAccept.AsObject,
        connectionReject?: RtmpConnectionReject.AsObject,
        streamAccept?: RtmpStreamAccept.AsObject,
        streamReject?: RtmpStreamReject.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        INITIAL_CONFIG = 1,
        CONNECTION_ACCEPT = 2,
        CONNECTION_REJECT = 3,
        STREAM_ACCEPT = 4,
        STREAM_REJECT = 5,
    }

}

export class RtmpConnection extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpConnection;
    getApp(): string;
    setApp(value: string): RtmpConnection;
    getUrl(): string;
    setUrl(value: string): RtmpConnection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpConnection.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpConnection): RtmpConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpConnection;
    static deserializeBinaryFromReader(message: RtmpConnection, reader: jspb.BinaryReader): RtmpConnection;
}

export namespace RtmpConnection {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        app: string,
        url: string,
    }
}

export class RtmpSourceStatus extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpSourceStatus;
    getState(): RtmpSourceStatus.State;
    setState(value: RtmpSourceStatus.State): RtmpSourceStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpSourceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpSourceStatus): RtmpSourceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpSourceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpSourceStatus;
    static deserializeBinaryFromReader(message: RtmpSourceStatus, reader: jspb.BinaryReader): RtmpSourceStatus;
}

export namespace RtmpSourceStatus {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        state: RtmpSourceStatus.State,
    }

    export enum State {
    DISCONNECTED = 0,
    }

}

export class RtmpOnStream extends jspb.Message { 

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): ConnectionId | undefined;
    setConnectionId(value?: ConnectionId): RtmpOnStream;
    getPublishingName(): string;
    setPublishingName(value: string): RtmpOnStream;
    getStreamId(): number;
    setStreamId(value: number): RtmpOnStream;
    getApp(): string;
    setApp(value: string): RtmpOnStream;
    getUrl(): string;
    setUrl(value: string): RtmpOnStream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpOnStream.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpOnStream): RtmpOnStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpOnStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpOnStream;
    static deserializeBinaryFromReader(message: RtmpOnStream, reader: jspb.BinaryReader): RtmpOnStream;
}

export namespace RtmpOnStream {
    export type AsObject = {
        connectionId?: ConnectionId.AsObject,
        publishingName: string,
        streamId: number,
        app: string,
        url: string,
    }
}

export class RtmpSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): RtmpSourceEvent;

    hasOnConnection(): boolean;
    clearOnConnection(): void;
    getOnConnection(): RtmpConnection | undefined;
    setOnConnection(value?: RtmpConnection): RtmpSourceEvent;

    hasOnStream(): boolean;
    clearOnStream(): void;
    getOnStream(): RtmpOnStream | undefined;
    setOnStream(value?: RtmpOnStream): RtmpSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): RtmpSourceEvent;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): RtmpSourceStatus | undefined;
    setStatus(value?: RtmpSourceStatus): RtmpSourceEvent;

    getMessageCase(): RtmpSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtmpSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RtmpSourceEvent): RtmpSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtmpSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtmpSourceEvent;
    static deserializeBinaryFromReader(message: RtmpSourceEvent, reader: jspb.BinaryReader): RtmpSourceEvent;
}

export namespace RtmpSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        onConnection?: RtmpConnection.AsObject,
        onStream?: RtmpOnStream.AsObject,
        outboundContext?: Context.AsObject,
        status?: RtmpSourceStatus.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        ON_CONNECTION = 2,
        ON_STREAM = 3,
        OUTBOUND_CONTEXT = 4,
        STATUS = 5,
    }

}

export class TsProgram extends jspb.Message { 
    getProgramNumber(): number;
    setProgramNumber(value: number): TsProgram;
    clearStreamsList(): void;
    getStreamsList(): Array<TsProgram.TsPid>;
    setStreamsList(value: Array<TsProgram.TsPid>): TsProgram;
    addStreams(value?: TsProgram.TsPid, index?: number): TsProgram.TsPid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TsProgram.AsObject;
    static toObject(includeInstance: boolean, msg: TsProgram): TsProgram.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TsProgram, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TsProgram;
    static deserializeBinaryFromReader(message: TsProgram, reader: jspb.BinaryReader): TsProgram;
}

export namespace TsProgram {
    export type AsObject = {
        programNumber: number,
        streamsList: Array<TsProgram.TsPid.AsObject>,
    }


    export class TsPid extends jspb.Message { 
        getPid(): number;
        setPid(value: number): TsPid;
        getStreamType(): TsProgram.TsStreamType;
        setStreamType(value: TsProgram.TsStreamType): TsPid;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TsPid.AsObject;
        static toObject(includeInstance: boolean, msg: TsPid): TsPid.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TsPid, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TsPid;
        static deserializeBinaryFromReader(message: TsPid, reader: jspb.BinaryReader): TsPid;
    }

    export namespace TsPid {
        export type AsObject = {
            pid: number,
            streamType: TsProgram.TsStreamType,
        }
    }


    export enum TsStreamType {
    MPEG1_VIDEO = 0,
    MPEG2_VIDEO = 1,
    MPEG1_AUDIO = 2,
    MPEG2_AUDIO = 3,
    PES_PRIVATE = 4,
    PRIVATE_SECTIONS = 5,
    AAC_ADTS = 6,
    AAC_LATM = 7,
    H264 = 8,
    UNKNOWN = 9,
    }

}

export class TsContext extends jspb.Message { 
    clearProgramsList(): void;
    getProgramsList(): Array<TsProgram>;
    setProgramsList(value: Array<TsProgram>): TsContext;
    addPrograms(value?: TsProgram, index?: number): TsProgram;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TsContext.AsObject;
    static toObject(includeInstance: boolean, msg: TsContext): TsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TsContext;
    static deserializeBinaryFromReader(message: TsContext, reader: jspb.BinaryReader): TsContext;
}

export namespace TsContext {
    export type AsObject = {
        programsList: Array<TsProgram.AsObject>,
    }
}

export class TsSourceStatus extends jspb.Message { 
    getState(): TsSourceStatus.State;
    setState(value: TsSourceStatus.State): TsSourceStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TsSourceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TsSourceStatus): TsSourceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TsSourceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TsSourceStatus;
    static deserializeBinaryFromReader(message: TsSourceStatus, reader: jspb.BinaryReader): TsSourceStatus;
}

export namespace TsSourceStatus {
    export type AsObject = {
        state: TsSourceStatus.State,
    }

    export enum State {
    LOOPED = 0,
    EOF = 1,
    }

}

export class TsSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): TsSourceEvent;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): TsSourceStatus | undefined;
    setStatus(value?: TsSourceStatus): TsSourceEvent;

    hasTsContext(): boolean;
    clearTsContext(): void;
    getTsContext(): TsContext | undefined;
    setTsContext(value?: TsContext): TsSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): TsSourceEvent;

    getMessageCase(): TsSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TsSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TsSourceEvent): TsSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TsSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TsSourceEvent;
    static deserializeBinaryFromReader(message: TsSourceEvent, reader: jspb.BinaryReader): TsSourceEvent;
}

export namespace TsSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        status?: TsSourceStatus.AsObject,
        tsContext?: TsContext.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        STATUS = 2,
        TS_CONTEXT = 3,
        OUTBOUND_CONTEXT = 4,
    }

}

export class TsFileSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): TsFileSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): TsFileSourceConfiguration;
    getFilename(): string;
    setFilename(value: string): TsFileSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TsFileSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: TsFileSourceConfiguration): TsFileSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TsFileSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TsFileSourceConfiguration;
    static deserializeBinaryFromReader(message: TsFileSourceConfiguration, reader: jspb.BinaryReader): TsFileSourceConfiguration;
}

export namespace TsFileSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        filename: string,
    }
}

export class WebVttFileSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): WebVttFileSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): WebVttFileSourceConfiguration;
    getFilename(): string;
    setFilename(value: string): WebVttFileSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebVttFileSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: WebVttFileSourceConfiguration): WebVttFileSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebVttFileSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebVttFileSourceConfiguration;
    static deserializeBinaryFromReader(message: WebVttFileSourceConfiguration, reader: jspb.BinaryReader): WebVttFileSourceConfiguration;
}

export namespace WebVttFileSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        filename: string,
    }
}

export class WebVttFileSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): WebVttFileSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): WebVttFileSourceEvent;

    getMessageCase(): WebVttFileSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebVttFileSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: WebVttFileSourceEvent): WebVttFileSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebVttFileSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebVttFileSourceEvent;
    static deserializeBinaryFromReader(message: WebVttFileSourceEvent, reader: jspb.BinaryReader): WebVttFileSourceEvent;
}

export namespace WebVttFileSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class SrtSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): SrtSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): SrtSourceConfiguration;
    getIp(): string;
    setIp(value: string): SrtSourceConfiguration;
    getPort(): number;
    setPort(value: number): SrtSourceConfiguration;
    getMode(): SrtMode;
    setMode(value: SrtMode): SrtSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SrtSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: SrtSourceConfiguration): SrtSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SrtSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SrtSourceConfiguration;
    static deserializeBinaryFromReader(message: SrtSourceConfiguration, reader: jspb.BinaryReader): SrtSourceConfiguration;
}

export namespace SrtSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        ip: string,
        port: number,
        mode: SrtMode,
    }
}

export class UdpTsSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): UdpTsSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): UdpTsSourceConfiguration;
    getIp(): string;
    setIp(value: string): UdpTsSourceConfiguration;
    getPort(): number;
    setPort(value: number): UdpTsSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdpTsSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: UdpTsSourceConfiguration): UdpTsSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdpTsSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdpTsSourceConfiguration;
    static deserializeBinaryFromReader(message: UdpTsSourceConfiguration, reader: jspb.BinaryReader): UdpTsSourceConfiguration;
}

export namespace UdpTsSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        ip: string,
        port: number,
    }
}

export class M3u8MediaSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): M3u8MediaSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): M3u8MediaSourceConfiguration;
    getUrl(): string;
    setUrl(value: string): M3u8MediaSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): M3u8MediaSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: M3u8MediaSourceConfiguration): M3u8MediaSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: M3u8MediaSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): M3u8MediaSourceConfiguration;
    static deserializeBinaryFromReader(message: M3u8MediaSourceConfiguration, reader: jspb.BinaryReader): M3u8MediaSourceConfiguration;
}

export namespace M3u8MediaSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        url: string,
    }
}

export class TestCardVideoSetup extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): TestCardVideoSetup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestCardVideoSetup.AsObject;
    static toObject(includeInstance: boolean, msg: TestCardVideoSetup): TestCardVideoSetup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestCardVideoSetup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestCardVideoSetup;
    static deserializeBinaryFromReader(message: TestCardVideoSetup, reader: jspb.BinaryReader): TestCardVideoSetup;
}

export namespace TestCardVideoSetup {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
    }
}

export class TestCardVideoConfiguration extends jspb.Message { 

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): Resolution | undefined;
    setResolution(value?: Resolution): TestCardVideoConfiguration;
    getSourceName(): string;
    setSourceName(value: string): TestCardVideoConfiguration;
    getNumberOfFrames(): number;
    setNumberOfFrames(value: number): TestCardVideoConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestCardVideoConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: TestCardVideoConfiguration): TestCardVideoConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestCardVideoConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestCardVideoConfiguration;
    static deserializeBinaryFromReader(message: TestCardVideoConfiguration, reader: jspb.BinaryReader): TestCardVideoConfiguration;
}

export namespace TestCardVideoConfiguration {
    export type AsObject = {
        resolution?: Resolution.AsObject,
        sourceName: string,
        numberOfFrames: number,
    }
}

export class TestCardVideoSourceMessage extends jspb.Message { 

    hasSetup(): boolean;
    clearSetup(): void;
    getSetup(): TestCardVideoSetup | undefined;
    setSetup(value?: TestCardVideoSetup): TestCardVideoSourceMessage;

    hasConfigure(): boolean;
    clearConfigure(): void;
    getConfigure(): TestCardVideoConfiguration | undefined;
    setConfigure(value?: TestCardVideoConfiguration): TestCardVideoSourceMessage;

    getMessageCase(): TestCardVideoSourceMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestCardVideoSourceMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TestCardVideoSourceMessage): TestCardVideoSourceMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestCardVideoSourceMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestCardVideoSourceMessage;
    static deserializeBinaryFromReader(message: TestCardVideoSourceMessage, reader: jspb.BinaryReader): TestCardVideoSourceMessage;
}

export namespace TestCardVideoSourceMessage {
    export type AsObject = {
        setup?: TestCardVideoSetup.AsObject,
        configure?: TestCardVideoConfiguration.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        SETUP = 1,
        CONFIGURE = 2,
    }

}

export class TestCardVideoSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): TestCardVideoSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): TestCardVideoSourceEvent;

    getMessageCase(): TestCardVideoSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestCardVideoSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TestCardVideoSourceEvent): TestCardVideoSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestCardVideoSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestCardVideoSourceEvent;
    static deserializeBinaryFromReader(message: TestCardVideoSourceEvent, reader: jspb.BinaryReader): TestCardVideoSourceEvent;
}

export namespace TestCardVideoSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class ImageFileSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): ImageFileSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): ImageFileSourceConfiguration;
    getFileName(): string;
    setFileName(value: string): ImageFileSourceConfiguration;
    getImageFormat(): ImageFileSourceConfiguration.ImageFormat;
    setImageFormat(value: ImageFileSourceConfiguration.ImageFormat): ImageFileSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageFileSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: ImageFileSourceConfiguration): ImageFileSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageFileSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageFileSourceConfiguration;
    static deserializeBinaryFromReader(message: ImageFileSourceConfiguration, reader: jspb.BinaryReader): ImageFileSourceConfiguration;
}

export namespace ImageFileSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
        fileName: string,
        imageFormat: ImageFileSourceConfiguration.ImageFormat,
    }

    export enum ImageFormat {
    INFER = 0,
    PNG = 1,
    JPEG = 2,
    GIF = 3,
    WEB_P = 4,
    PNM = 5,
    TIFF = 6,
    TGA = 7,
    DDS = 8,
    BMP = 9,
    ICO = 10,
    HDR = 11,
    OPEN_EXR = 12,
    FARBFELD = 13,
    AVIF = 14,
    }

}

export class ImageFileSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): ImageFileSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): ImageFileSourceEvent;

    getMessageCase(): ImageFileSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageFileSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ImageFileSourceEvent): ImageFileSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageFileSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageFileSourceEvent;
    static deserializeBinaryFromReader(message: ImageFileSourceEvent, reader: jspb.BinaryReader): ImageFileSourceEvent;
}

export namespace ImageFileSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class WhipSourceConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): WhipSourceConfiguration;
    getSourceName(): string;
    setSourceName(value: string): WhipSourceConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhipSourceConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: WhipSourceConfiguration): WhipSourceConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhipSourceConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhipSourceConfiguration;
    static deserializeBinaryFromReader(message: WhipSourceConfiguration, reader: jspb.BinaryReader): WhipSourceConfiguration;
}

export namespace WhipSourceConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        sourceName: string,
    }
}

export class WhipSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): WhipSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): WhipSourceEvent;

    getMessageCase(): WhipSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhipSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: WhipSourceEvent): WhipSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhipSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhipSourceEvent;
    static deserializeBinaryFromReader(message: WhipSourceEvent, reader: jspb.BinaryReader): WhipSourceEvent;
}

export namespace WhipSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class OffsetRectangle extends jspb.Message { 
    getX(): number;
    setX(value: number): OffsetRectangle;
    getY(): number;
    setY(value: number): OffsetRectangle;
    getW(): number;
    setW(value: number): OffsetRectangle;
    getH(): number;
    setH(value: number): OffsetRectangle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OffsetRectangle.AsObject;
    static toObject(includeInstance: boolean, msg: OffsetRectangle): OffsetRectangle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OffsetRectangle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OffsetRectangle;
    static deserializeBinaryFromReader(message: OffsetRectangle, reader: jspb.BinaryReader): OffsetRectangle;
}

export namespace OffsetRectangle {
    export type AsObject = {
        x: number,
        y: number,
        w: number,
        h: number,
    }
}

export class ComposePart extends jspb.Message { 

    hasPin(): boolean;
    clearPin(): void;
    getPin(): InputPin | undefined;
    setPin(value?: InputPin): ComposePart;

    hasSourceRect(): boolean;
    clearSourceRect(): void;
    getSourceRect(): OffsetRectangle | undefined;
    setSourceRect(value?: OffsetRectangle): ComposePart;

    hasDestRect(): boolean;
    clearDestRect(): void;
    getDestRect(): OffsetRectangle | undefined;
    setDestRect(value?: OffsetRectangle): ComposePart;
    getZIndex(): number;
    setZIndex(value: number): ComposePart;
    getOpacity(): number;
    setOpacity(value: number): ComposePart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposePart.AsObject;
    static toObject(includeInstance: boolean, msg: ComposePart): ComposePart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposePart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposePart;
    static deserializeBinaryFromReader(message: ComposePart, reader: jspb.BinaryReader): ComposePart;
}

export namespace ComposePart {
    export type AsObject = {
        pin?: InputPin.AsObject,
        sourceRect?: OffsetRectangle.AsObject,
        destRect?: OffsetRectangle.AsObject,
        zIndex: number,
        opacity: number,
    }
}

export class ComposeVideoMessage extends jspb.Message { 

    hasInitialConfig(): boolean;
    clearInitialConfig(): void;
    getInitialConfig(): ComposeVideoConfiguration | undefined;
    setInitialConfig(value?: ComposeVideoConfiguration): ComposeVideoMessage;

    hasUpdateConfig(): boolean;
    clearUpdateConfig(): void;
    getUpdateConfig(): ComposeVideoUpdateConfiguration | undefined;
    setUpdateConfig(value?: ComposeVideoUpdateConfiguration): ComposeVideoMessage;

    getMessageCase(): ComposeVideoMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeVideoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeVideoMessage): ComposeVideoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeVideoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeVideoMessage;
    static deserializeBinaryFromReader(message: ComposeVideoMessage, reader: jspb.BinaryReader): ComposeVideoMessage;
}

export namespace ComposeVideoMessage {
    export type AsObject = {
        initialConfig?: ComposeVideoConfiguration.AsObject,
        updateConfig?: ComposeVideoUpdateConfiguration.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        INITIAL_CONFIG = 1,
        UPDATE_CONFIG = 2,
    }

}

export class ComposeVideoConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): ComposeVideoConfiguration;
    getReferenceStream(): string;
    setReferenceStream(value: string): ComposeVideoConfiguration;
    clearPartsList(): void;
    getPartsList(): Array<ComposePart>;
    setPartsList(value: Array<ComposePart>): ComposeVideoConfiguration;
    addParts(value?: ComposePart, index?: number): ComposePart;

    hasOutputStreamId(): boolean;
    clearOutputStreamId(): void;
    getOutputStreamId(): StreamId | undefined;
    setOutputStreamId(value?: StreamId): ComposeVideoConfiguration;
    getOutputSourceName(): string;
    setOutputSourceName(value: string): ComposeVideoConfiguration;

    hasReferenceResolution(): boolean;
    clearReferenceResolution(): void;
    getReferenceResolution(): Resolution | undefined;
    setReferenceResolution(value?: Resolution): ComposeVideoConfiguration;

    hasOutputResolution(): boolean;
    clearOutputResolution(): void;
    getOutputResolution(): Resolution | undefined;
    setOutputResolution(value?: Resolution): ComposeVideoConfiguration;
    clearInputPinsList(): void;
    getInputPinsList(): Array<InputPin>;
    setInputPinsList(value: Array<InputPin>): ComposeVideoConfiguration;
    addInputPins(value?: InputPin, index?: number): InputPin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeVideoConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeVideoConfiguration): ComposeVideoConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeVideoConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeVideoConfiguration;
    static deserializeBinaryFromReader(message: ComposeVideoConfiguration, reader: jspb.BinaryReader): ComposeVideoConfiguration;
}

export namespace ComposeVideoConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        referenceStream: string,
        partsList: Array<ComposePart.AsObject>,
        outputStreamId?: StreamId.AsObject,
        outputSourceName: string,
        referenceResolution?: Resolution.AsObject,
        outputResolution?: Resolution.AsObject,
        inputPinsList: Array<InputPin.AsObject>,
    }
}

export class ComposeVideoUpdateConfiguration extends jspb.Message { 
    clearPartsList(): void;
    getPartsList(): Array<ComposePart>;
    setPartsList(value: Array<ComposePart>): ComposeVideoUpdateConfiguration;
    addParts(value?: ComposePart, index?: number): ComposePart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeVideoUpdateConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeVideoUpdateConfiguration): ComposeVideoUpdateConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeVideoUpdateConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeVideoUpdateConfiguration;
    static deserializeBinaryFromReader(message: ComposeVideoUpdateConfiguration, reader: jspb.BinaryReader): ComposeVideoUpdateConfiguration;
}

export namespace ComposeVideoUpdateConfiguration {
    export type AsObject = {
        partsList: Array<ComposePart.AsObject>,
    }
}

export class ComposeVideoSourceEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): ComposeVideoSourceEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): ComposeVideoSourceEvent;

    getMessageCase(): ComposeVideoSourceEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeVideoSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeVideoSourceEvent): ComposeVideoSourceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeVideoSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeVideoSourceEvent;
    static deserializeBinaryFromReader(message: ComposeVideoSourceEvent, reader: jspb.BinaryReader): ComposeVideoSourceEvent;
}

export namespace ComposeVideoSourceEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class HlsVideoConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): HlsVideoConfiguration;
    getSegmentDurationSeconds(): number;
    setSegmentDurationSeconds(value: number): HlsVideoConfiguration;
    getPartDurationSeconds(): number;
    setPartDurationSeconds(value: number): HlsVideoConfiguration;
    getDelayOutputMs(): number;
    setDelayOutputMs(value: number): HlsVideoConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HlsVideoConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: HlsVideoConfiguration): HlsVideoConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HlsVideoConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HlsVideoConfiguration;
    static deserializeBinaryFromReader(message: HlsVideoConfiguration, reader: jspb.BinaryReader): HlsVideoConfiguration;
}

export namespace HlsVideoConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        segmentDurationSeconds: number,
        partDurationSeconds: number,
        delayOutputMs: number,
    }
}

export class HlsAudioConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): HlsAudioConfiguration;
    getSegmentDurationSeconds(): number;
    setSegmentDurationSeconds(value: number): HlsAudioConfiguration;
    getPartDurationSeconds(): number;
    setPartDurationSeconds(value: number): HlsAudioConfiguration;
    getDelayOutputMs(): number;
    setDelayOutputMs(value: number): HlsAudioConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HlsAudioConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: HlsAudioConfiguration): HlsAudioConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HlsAudioConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HlsAudioConfiguration;
    static deserializeBinaryFromReader(message: HlsAudioConfiguration, reader: jspb.BinaryReader): HlsAudioConfiguration;
}

export namespace HlsAudioConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        segmentDurationSeconds: number,
        partDurationSeconds: number,
        delayOutputMs: number,
    }
}

export class HlsWebVttConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): HlsWebVttConfiguration;
    getSegmentDurationSeconds(): number;
    setSegmentDurationSeconds(value: number): HlsWebVttConfiguration;
    getDelayOutputMs(): number;
    setDelayOutputMs(value: number): HlsWebVttConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HlsWebVttConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: HlsWebVttConfiguration): HlsWebVttConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HlsWebVttConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HlsWebVttConfiguration;
    static deserializeBinaryFromReader(message: HlsWebVttConfiguration, reader: jspb.BinaryReader): HlsWebVttConfiguration;
}

export namespace HlsWebVttConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        segmentDurationSeconds: number,
        delayOutputMs: number,
    }
}

export class HlsMasterConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): HlsMasterConfiguration;
    getPlaylistName(): string;
    setPlaylistName(value: string): HlsMasterConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HlsMasterConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: HlsMasterConfiguration): HlsMasterConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HlsMasterConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HlsMasterConfiguration;
    static deserializeBinaryFromReader(message: HlsMasterConfiguration, reader: jspb.BinaryReader): HlsMasterConfiguration;
}

export namespace HlsMasterConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        playlistName: string,
    }
}

export class HlsOutputEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): HlsOutputEvent;

    getMessageCase(): HlsOutputEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HlsOutputEvent.AsObject;
    static toObject(includeInstance: boolean, msg: HlsOutputEvent): HlsOutputEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HlsOutputEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HlsOutputEvent;
    static deserializeBinaryFromReader(message: HlsOutputEvent, reader: jspb.BinaryReader): HlsOutputEvent;
}

export namespace HlsOutputEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
    }

}

export class WebRTCWhipOutputConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): WebRTCWhipOutputConfiguration;
    getUri(): string;
    setUri(value: string): WebRTCWhipOutputConfiguration;
    getAuthHeader(): string;
    setAuthHeader(value: string): WebRTCWhipOutputConfiguration;
    getNumVideoStreams(): number;
    setNumVideoStreams(value: number): WebRTCWhipOutputConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRTCWhipOutputConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: WebRTCWhipOutputConfiguration): WebRTCWhipOutputConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRTCWhipOutputConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRTCWhipOutputConfiguration;
    static deserializeBinaryFromReader(message: WebRTCWhipOutputConfiguration, reader: jspb.BinaryReader): WebRTCWhipOutputConfiguration;
}

export namespace WebRTCWhipOutputConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        uri: string,
        authHeader: string,
        numVideoStreams: number,
    }
}

export class WebRTCLocalOutputConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): WebRTCLocalOutputConfiguration;
    getNumVideoStreams(): number;
    setNumVideoStreams(value: number): WebRTCLocalOutputConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRTCLocalOutputConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: WebRTCLocalOutputConfiguration): WebRTCLocalOutputConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRTCLocalOutputConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRTCLocalOutputConfiguration;
    static deserializeBinaryFromReader(message: WebRTCLocalOutputConfiguration, reader: jspb.BinaryReader): WebRTCLocalOutputConfiguration;
}

export namespace WebRTCLocalOutputConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        numVideoStreams: number,
    }
}

export class WebRTCWhipOutputEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): WebRTCWhipOutputEvent;

    getMessageCase(): WebRTCWhipOutputEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRTCWhipOutputEvent.AsObject;
    static toObject(includeInstance: boolean, msg: WebRTCWhipOutputEvent): WebRTCWhipOutputEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRTCWhipOutputEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRTCWhipOutputEvent;
    static deserializeBinaryFromReader(message: WebRTCWhipOutputEvent, reader: jspb.BinaryReader): WebRTCWhipOutputEvent;
}

export namespace WebRTCWhipOutputEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
    }

}

export class FrameRate extends jspb.Message { 
    getFrames(): number;
    setFrames(value: number): FrameRate;
    getSeconds(): number;
    setSeconds(value: number): FrameRate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrameRate.AsObject;
    static toObject(includeInstance: boolean, msg: FrameRate): FrameRate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrameRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrameRate;
    static deserializeBinaryFromReader(message: FrameRate, reader: jspb.BinaryReader): FrameRate;
}

export namespace FrameRate {
    export type AsObject = {
        frames: number,
        seconds: number,
    }
}

export class SampleAspectRatio extends jspb.Message { 
    getX(): number;
    setX(value: number): SampleAspectRatio;
    getY(): number;
    setY(value: number): SampleAspectRatio;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleAspectRatio.AsObject;
    static toObject(includeInstance: boolean, msg: SampleAspectRatio): SampleAspectRatio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleAspectRatio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleAspectRatio;
    static deserializeBinaryFromReader(message: SampleAspectRatio, reader: jspb.BinaryReader): SampleAspectRatio;
}

export namespace SampleAspectRatio {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class X264Int extends jspb.Message { 
    getValue(): number;
    setValue(value: number): X264Int;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X264Int.AsObject;
    static toObject(includeInstance: boolean, msg: X264Int): X264Int.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X264Int, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X264Int;
    static deserializeBinaryFromReader(message: X264Int, reader: jspb.BinaryReader): X264Int;
}

export namespace X264Int {
    export type AsObject = {
        value: number,
    }
}

export class X264Bool extends jspb.Message { 
    getValue(): boolean;
    setValue(value: boolean): X264Bool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X264Bool.AsObject;
    static toObject(includeInstance: boolean, msg: X264Bool): X264Bool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X264Bool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X264Bool;
    static deserializeBinaryFromReader(message: X264Bool, reader: jspb.BinaryReader): X264Bool;
}

export namespace X264Bool {
    export type AsObject = {
        value: boolean,
    }
}

export class X264Codec extends jspb.Message { 

    hasAbr(): boolean;
    clearAbr(): void;
    getAbr(): number;
    setAbr(value: number): X264Codec;

    hasCqp(): boolean;
    clearCqp(): void;
    getCqp(): number;
    setCqp(value: number): X264Codec;

    hasCrf(): boolean;
    clearCrf(): void;
    getCrf(): number;
    setCrf(value: number): X264Codec;
    getProfile(): X264Codec.X264Profile;
    setProfile(value: X264Codec.X264Profile): X264Codec;

    hasLevel(): boolean;
    clearLevel(): void;
    getLevel(): X264Int | undefined;
    setLevel(value?: X264Int): X264Codec;

    hasKeyFrameIntervalMin(): boolean;
    clearKeyFrameIntervalMin(): void;
    getKeyFrameIntervalMin(): X264Int | undefined;
    setKeyFrameIntervalMin(value?: X264Int): X264Codec;

    hasKeyFrameIntervalMax(): boolean;
    clearKeyFrameIntervalMax(): void;
    getKeyFrameIntervalMax(): X264Int | undefined;
    setKeyFrameIntervalMax(value?: X264Int): X264Codec;

    hasBframes(): boolean;
    clearBframes(): void;
    getBframes(): X264Int | undefined;
    setBframes(value?: X264Int): X264Codec;
    getTune(): X264Codec.X264Tune;
    setTune(value: X264Codec.X264Tune): X264Codec;
    getPreset(): X264Codec.X264Preset;
    setPreset(value: X264Codec.X264Preset): X264Codec;

    hasFrameReference(): boolean;
    clearFrameReference(): void;
    getFrameReference(): X264Int | undefined;
    setFrameReference(value?: X264Int): X264Codec;

    hasCabac(): boolean;
    clearCabac(): void;
    getCabac(): X264Bool | undefined;
    setCabac(value?: X264Bool): X264Codec;

    hasVbvMaxRate(): boolean;
    clearVbvMaxRate(): void;
    getVbvMaxRate(): X264Int | undefined;
    setVbvMaxRate(value?: X264Int): X264Codec;

    hasVbvBufferSize(): boolean;
    clearVbvBufferSize(): void;
    getVbvBufferSize(): X264Int | undefined;
    setVbvBufferSize(value?: X264Int): X264Codec;

    hasSceneCut(): boolean;
    clearSceneCut(): void;
    getSceneCut(): X264Int | undefined;
    setSceneCut(value?: X264Int): X264Codec;

    hasAud(): boolean;
    clearAud(): void;
    getAud(): X264Bool | undefined;
    setAud(value?: X264Bool): X264Codec;

    hasNoDeblock(): boolean;
    clearNoDeblock(): void;
    getNoDeblock(): X264Bool | undefined;
    setNoDeblock(value?: X264Bool): X264Codec;
    getNalHrd(): X264Codec.X264NalHrd;
    setNalHrd(value: X264Codec.X264NalHrd): X264Codec;

    hasSar(): boolean;
    clearSar(): void;
    getSar(): SampleAspectRatio | undefined;
    setSar(value?: SampleAspectRatio): X264Codec;

    getBitratemodeCase(): X264Codec.BitratemodeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X264Codec.AsObject;
    static toObject(includeInstance: boolean, msg: X264Codec): X264Codec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X264Codec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X264Codec;
    static deserializeBinaryFromReader(message: X264Codec, reader: jspb.BinaryReader): X264Codec;
}

export namespace X264Codec {
    export type AsObject = {
        abr: number,
        cqp: number,
        crf: number,
        profile: X264Codec.X264Profile,
        level?: X264Int.AsObject,
        keyFrameIntervalMin?: X264Int.AsObject,
        keyFrameIntervalMax?: X264Int.AsObject,
        bframes?: X264Int.AsObject,
        tune: X264Codec.X264Tune,
        preset: X264Codec.X264Preset,
        frameReference?: X264Int.AsObject,
        cabac?: X264Bool.AsObject,
        vbvMaxRate?: X264Int.AsObject,
        vbvBufferSize?: X264Int.AsObject,
        sceneCut?: X264Int.AsObject,
        aud?: X264Bool.AsObject,
        noDeblock?: X264Bool.AsObject,
        nalHrd: X264Codec.X264NalHrd,
        sar?: SampleAspectRatio.AsObject,
    }

    export enum X264Profile {
    PROFILE_UNDEFINED = 0,
    BASELINE = 1,
    MAIN = 2,
    EXTENDED = 3,
    HIGH = 4,
    HIGH10 = 5,
    }

    export enum X264Preset {
    ULTRAFAST = 0,
    SUPERFAST = 1,
    VERYFAST = 2,
    FASTER = 3,
    FAST = 4,
    MEDIUM = 5,
    SLOW = 6,
    SLOWER = 7,
    VERYSLOW = 8,
    PLACEBO = 9,
    }

    export enum X264Tune {
    TUNE_UNDEFINED = 0,
    FILM = 1,
    ANIMATION = 2,
    GRAIN = 3,
    STILLIMAGE = 4,
    PSNR = 5,
    SSIM = 6,
    FASTDECODE = 7,
    ZEROLATENCY = 8,
    }

    export enum X264NalHrd {
    HRD_UNDEFINED = 0,
    NONE = 1,
    VBR = 2,
    CBR = 3,
    }


    export enum BitratemodeCase {
        BITRATEMODE_NOT_SET = 0,
        ABR = 20,
        CQP = 21,
        CRF = 22,
    }

}

export class H264LadderStream extends jspb.Message { 
    getName(): string;
    setName(value: string): H264LadderStream;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): Resolution | undefined;
    setResolution(value?: Resolution): H264LadderStream;

    hasFrameRate(): boolean;
    clearFrameRate(): void;
    getFrameRate(): FrameRate | undefined;
    setFrameRate(value?: FrameRate): H264LadderStream;
    getBitrate(): number;
    setBitrate(value: number): H264LadderStream;

    hasX264(): boolean;
    clearX264(): void;
    getX264(): X264Codec | undefined;
    setX264(value?: X264Codec): H264LadderStream;

    getCodecCase(): H264LadderStream.CodecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): H264LadderStream.AsObject;
    static toObject(includeInstance: boolean, msg: H264LadderStream): H264LadderStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: H264LadderStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): H264LadderStream;
    static deserializeBinaryFromReader(message: H264LadderStream, reader: jspb.BinaryReader): H264LadderStream;
}

export namespace H264LadderStream {
    export type AsObject = {
        name: string,
        resolution?: Resolution.AsObject,
        frameRate?: FrameRate.AsObject,
        bitrate: number,
        x264?: X264Codec.AsObject,
    }

    export enum CodecCase {
        CODEC_NOT_SET = 0,
        X264 = 5,
    }

}

export class H264LadderConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): H264LadderConfiguration;
    clearStreamsList(): void;
    getStreamsList(): Array<H264LadderStream>;
    setStreamsList(value: Array<H264LadderStream>): H264LadderConfiguration;
    addStreams(value?: H264LadderStream, index?: number): H264LadderStream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): H264LadderConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: H264LadderConfiguration): H264LadderConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: H264LadderConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): H264LadderConfiguration;
    static deserializeBinaryFromReader(message: H264LadderConfiguration, reader: jspb.BinaryReader): H264LadderConfiguration;
}

export namespace H264LadderConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        streamsList: Array<H264LadderStream.AsObject>,
    }
}

export class H264LadderEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): H264LadderEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): H264LadderEvent;

    getMessageCase(): H264LadderEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): H264LadderEvent.AsObject;
    static toObject(includeInstance: boolean, msg: H264LadderEvent): H264LadderEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: H264LadderEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): H264LadderEvent;
    static deserializeBinaryFromReader(message: H264LadderEvent, reader: jspb.BinaryReader): H264LadderEvent;
}

export namespace H264LadderEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class SourceSwitcherConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): SourceSwitcherConfiguration;
    getActiveSource(): string;
    setActiveSource(value: string): SourceSwitcherConfiguration;
    getOutputSource(): string;
    setOutputSource(value: string): SourceSwitcherConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSwitcherConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSwitcherConfiguration): SourceSwitcherConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSwitcherConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSwitcherConfiguration;
    static deserializeBinaryFromReader(message: SourceSwitcherConfiguration, reader: jspb.BinaryReader): SourceSwitcherConfiguration;
}

export namespace SourceSwitcherConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        activeSource: string,
        outputSource: string,
    }
}

export class SourceSwitcherSwitch extends jspb.Message { 
    getNewActiveSource(): string;
    setNewActiveSource(value: string): SourceSwitcherSwitch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSwitcherSwitch.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSwitcherSwitch): SourceSwitcherSwitch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSwitcherSwitch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSwitcherSwitch;
    static deserializeBinaryFromReader(message: SourceSwitcherSwitch, reader: jspb.BinaryReader): SourceSwitcherSwitch;
}

export namespace SourceSwitcherSwitch {
    export type AsObject = {
        newActiveSource: string,
    }
}

export class SourceSwitcherMessage extends jspb.Message { 

    hasInitialConfig(): boolean;
    clearInitialConfig(): void;
    getInitialConfig(): SourceSwitcherConfiguration | undefined;
    setInitialConfig(value?: SourceSwitcherConfiguration): SourceSwitcherMessage;

    hasSwitchSource(): boolean;
    clearSwitchSource(): void;
    getSwitchSource(): SourceSwitcherSwitch | undefined;
    setSwitchSource(value?: SourceSwitcherSwitch): SourceSwitcherMessage;

    getMessageCase(): SourceSwitcherMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSwitcherMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSwitcherMessage): SourceSwitcherMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSwitcherMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSwitcherMessage;
    static deserializeBinaryFromReader(message: SourceSwitcherMessage, reader: jspb.BinaryReader): SourceSwitcherMessage;
}

export namespace SourceSwitcherMessage {
    export type AsObject = {
        initialConfig?: SourceSwitcherConfiguration.AsObject,
        switchSource?: SourceSwitcherSwitch.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        INITIAL_CONFIG = 1,
        SWITCH_SOURCE = 2,
    }

}

export class SourceSwitcherEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): SourceSwitcherEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): SourceSwitcherEvent;

    getMessageCase(): SourceSwitcherEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceSwitcherEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SourceSwitcherEvent): SourceSwitcherEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceSwitcherEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceSwitcherEvent;
    static deserializeBinaryFromReader(message: SourceSwitcherEvent, reader: jspb.BinaryReader): SourceSwitcherEvent;
}

export namespace SourceSwitcherEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class AwsTranscribeConfiguration extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MediaNodeId | undefined;
    setId(value?: MediaNodeId): AwsTranscribeConfiguration;
    getAwsRegion(): string;
    setAwsRegion(value: string): AwsTranscribeConfiguration;
    getAwsAccessKeyId(): string;
    setAwsAccessKeyId(value: string): AwsTranscribeConfiguration;
    getAwsSecretAccessKey(): string;
    setAwsSecretAccessKey(value: string): AwsTranscribeConfiguration;
    getOutputStreamId(): number;
    setOutputStreamId(value: number): AwsTranscribeConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AwsTranscribeConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: AwsTranscribeConfiguration): AwsTranscribeConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AwsTranscribeConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AwsTranscribeConfiguration;
    static deserializeBinaryFromReader(message: AwsTranscribeConfiguration, reader: jspb.BinaryReader): AwsTranscribeConfiguration;
}

export namespace AwsTranscribeConfiguration {
    export type AsObject = {
        id?: MediaNodeId.AsObject,
        awsRegion: string,
        awsAccessKeyId: string,
        awsSecretAccessKey: string,
        outputStreamId: number,
    }
}

export class AwsTranscribeEvent extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): AwsTranscribeEvent;

    hasOutboundContext(): boolean;
    clearOutboundContext(): void;
    getOutboundContext(): Context | undefined;
    setOutboundContext(value?: Context): AwsTranscribeEvent;

    getMessageCase(): AwsTranscribeEvent.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AwsTranscribeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AwsTranscribeEvent): AwsTranscribeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AwsTranscribeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AwsTranscribeEvent;
    static deserializeBinaryFromReader(message: AwsTranscribeEvent, reader: jspb.BinaryReader): AwsTranscribeEvent;
}

export namespace AwsTranscribeEvent {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        outboundContext?: Context.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        NODE_ID = 1,
        OUTBOUND_CONTEXT = 2,
    }

}

export class SubscribeSource extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): SubscribeSource;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): StreamKey | undefined;
    setStream(value?: StreamKey): SubscribeSource;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): InputPin | undefined;
    setInput(value?: InputPin): SubscribeSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeSource.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeSource): SubscribeSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeSource;
    static deserializeBinaryFromReader(message: SubscribeSource, reader: jspb.BinaryReader): SubscribeSource;
}

export namespace SubscribeSource {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        stream?: StreamKey.AsObject,
        input?: InputPin.AsObject,
    }
}

export class Subscription extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): MediaNodeId | undefined;
    setNodeId(value?: MediaNodeId): Subscription;
    clearSourcesList(): void;
    getSourcesList(): Array<SubscribeSource>;
    setSourcesList(value: Array<SubscribeSource>): Subscription;
    addSources(value?: SubscribeSource, index?: number): SubscribeSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subscription.AsObject;
    static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subscription;
    static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
    export type AsObject = {
        nodeId?: MediaNodeId.AsObject,
        sourcesList: Array<SubscribeSource.AsObject>,
    }
}

export enum SrtMode {
    PUSH = 0,
    PULL = 1,
}
