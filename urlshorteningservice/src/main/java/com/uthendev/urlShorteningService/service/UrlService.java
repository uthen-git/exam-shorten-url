package com.uthendev.urlShorteningService.service;

import org.springframework.stereotype.Service;

import com.uthendev.urlShorteningService.model.Url;
import com.uthendev.urlShorteningService.model.UrlDto;

@Service
public interface UrlService
{
    public Url generateShortLink(UrlDto urlDto);
    public Url persistShortLink(Url url);
    public Url getEncodedUrl(String url);
    public  void  deleteShortLink(Url url);
}
